from django.contrib.auth.models import AbstractBaseUser  , PermissionsMixin
from django.db import models
from .managers import CustomUserManager

# Create your models here.

class CustomUser(AbstractBaseUser , PermissionsMixin) :
    phone_number = models.CharField(max_length=11 , unique=True)
    first_name =  models.CharField(max_length=30) 
    last_name = models.CharField(max_length=40)
    email = models.EmailField(blank=True , null=True)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = CustomUserManager()
    
    USERNAME_FIELD = "phone_number"
    
    REQUIRED_FIELDS = ["email" , "first_name" , "last_name"]
    
    def __str__(self):
        return self.phone_number

class Otp(models.Model) :
    phone = models.CharField(max_length=11)
    code = models.CharField(max_length=6)
    attempts = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
       
    def __str__(self):
        return f"{self.phone} - {self.code}"