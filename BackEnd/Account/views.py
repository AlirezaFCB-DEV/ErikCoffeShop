from rest_framework.decorators import api_view 
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate , login
from django.views.decorators.csrf import csrf_exempt

from .models import Otp
from .services import is_phone , otp_generator
from .serializers import UserSerializer

# Create your views here.

@api_view(["GET"])
def otp_sender(req) :
    phone = req.GET.get("phone")
    
    otp = Otp.objects.create(phone=phone, code = otp_generator())
    
    if is_phone(phone) :
        return Response({"data" : {
            "phone" : phone,
            "code" : otp.code
        }} , status=status.HTTP_200_OK)
    else :
        return Response({"error" : "Enter a correct value!!"} , status=status.HTTP_400_BAD_REQUEST)
      
@api_view(["POST"]) 
def login_view(req) :
    phone = req.data.get("phone")
    otp_code = req.data.get("otp_code")
    
    if not phone or not otp_code :
        return Response({"error" : "you must send values"} ,  status=status.HTTP_400_BAD_REQUEST)
    
    if not is_phone(phone) or len(otp_code) != 6 :
        return Response({"error" : "please enter correct values."} , status=status.HTTP_400_BAD_REQUEST)
    
    auth_result = authenticate(req , phone_number = phone , otp_code=otp_code)
    serializer = UserSerializer(auth_result)
    
    if auth_result :
        login(req , auth_result) 
        return Response({"msg" : "user logged successfully" , "user" : serializer.data} , status=status.HTTP_200_OK)
    else :
        return Response({"error" : "phone or otp are incorrect"} , status=status.HTTP_400_BAD_REQUEST)