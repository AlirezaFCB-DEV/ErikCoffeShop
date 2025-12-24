from django.contrib.auth.models import AbstractBaseUser  , PermissionsMixin
from django.db import models
from .managers import CustomUserManager

# Create your models here.

class CustomUser(AbstractBaseUser , PermissionsMixin) :
    phone_number = models.CharField(max_length=11 , unique=True)
    
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False) 
    is_staff = models.BooleanField(default=False)
    
    objects = CustomUserManager()
    
    USERNAME_FIELD = "phone_number"
    
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return self.phone_number
    
    def has_perm(self, perm, obj = None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True