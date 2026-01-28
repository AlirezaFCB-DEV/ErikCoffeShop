from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Address

class UserSerializer (serializers.ModelSerializer) :
    class Meta :
        model = get_user_model()
        fields = ["phone_number" , "first_name" , "last_name" , "email"]
        
class AddressSerializer(serializers.ModelSerializer) :
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta :
        model = Address
        fields = ["id" , "user" , "province" , "city" , "postal_code" , "full_address"]