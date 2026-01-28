from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login, get_user_model
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from .models import Otp, Address
from .services import is_phone, otp_generator, is_email, has_user
from .serializers import UserSerializer, AddressSerializer

# Create your views here.

User = get_user_model()


@api_view(["GET"])
def otp_sender(req):
    phone = req.GET.get("phone")

    otp = Otp.objects.create(phone=phone, code=otp_generator())

    if is_phone(phone):
        return Response({"data": {
            "phone": phone,
            "code": otp.code
        }}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Enter a correct value!!"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def login_view(req):
    phone = req.data.get("phone")
    otp_code = req.data.get("otp_code")

    if not phone or not otp_code:
        return Response({"error": "you must send values"},  status=status.HTTP_400_BAD_REQUEST)

    if not is_phone(phone) or len(otp_code) != 6:
        return Response({"error": "please enter correct values."}, status=status.HTTP_400_BAD_REQUEST)

    auth_result = authenticate(req, phone_number=phone, otp_code=otp_code)
    serializer = UserSerializer(auth_result)

    if auth_result:
        login(req, auth_result)
        return Response({"msg": "user logged successfully", "user": serializer.data}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "phone or otp are incorrect"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def signup_view(req):
    phone = req.data.get("phone_number")
    first_name = req.data.get("first_name")
    last_name = req.data.get("last_name")
    email = req.data.get("email")
    password = req.data.get("password")

    if not phone:
        return Response({"error": "you must send phone number"}, status=status.HTTP_400_BAD_REQUEST)
    elif not password:
        return Response({"error": "you must send password"}, status=status.HTTP_400_BAD_REQUEST)
    elif not first_name:
        return Response({"error": "you must send first name"}, status=status.HTTP_400_BAD_REQUEST)
    elif not last_name:
        return Response({"error": "you must send last name"}, status=status.HTTP_400_BAD_REQUEST)

    if not is_phone(phone):
        return Response({"error": "please enter a valid phone"}, status=status.HTTP_400_BAD_REQUEST)
    elif len(first_name) > 30:
        return Response({"error": "first name must be less than or equal 30 characters"}, status=status.HTTP_400_BAD_REQUEST)
    elif len(last_name) > 40:
        return Response({"error": "last name must be less than or equal 40 characters"}, status=status.HTTP_400_BAD_REQUEST)
    elif email and not is_email(email):
        return Response({"error": "please enter a valid email"}, status=status.HTTP_400_BAD_REQUEST)
    elif len(password) < 8:
        return Response({"error": "password must longer than 8 characters"})
    elif has_user(phone):
        return Response({"error": "user already exist"}, status=status.HTTP_302_FOUND)

    user = User.objects.create_user(
        phone_number=phone, first_name=first_name, last_name=last_name, email=email, password=password)

    serializer = UserSerializer(user)
    return Response({"msg": "user created successfully", "user": serializer.data}, status=status.HTTP_200_OK)
 
class AddressViewSet(ModelViewSet) :
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Address.objects.filter(user = self.request.user)
    
    def perform_create(self, serializer):
        return serializer.save(user = self.request.user)