from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model
from Account.models import Otp

class UserSerializer (ModelSerializer) :
    
    class Meta :
        model = get_user_model()
        fields = ["phone_number" , "first_name" , "last_name" , "email"]
        