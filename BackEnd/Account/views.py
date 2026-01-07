from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Otp
from .services import is_phone , otp_generator

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
    