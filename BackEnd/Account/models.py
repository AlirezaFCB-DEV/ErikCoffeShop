from django.contrib.auth.models import AbstractBaseUser  , PermissionsMixin
from django.db import models
from .managers import CustomUserManager
from django.utils import timezone
from datetime import timedelta
import random

# Create your models here.

class CustomUser(AbstractBaseUser , PermissionsMixin) :
    phone_number = models.CharField(max_length=11 , unique=True)
    first_name =  models.CharField(max_length=30) 
    last_name = models.CharField(max_length=40)
    email = models.EmailField()
    address = models.TextField()
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = CustomUserManager()
    
    USERNAME_FIELD = "phone_number"
    
    REQUIRED_FIELDS = ["email" , "first_name" , "last_name"]
    
    def __str__(self):
        return self.phone_number

class Otp(models.Model) :
    user = models.ForeignKey("CustomUser" , on_delete=models.CASCADE)
    code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)
       
    def otp_generator(self) :
        otp = str(random.randint(100000,999999))
        self.code = otp
        self.save()
        return otp