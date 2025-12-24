from django.contrib.auth.models import AbstractBaseUser , BaseUserManager , PermissionsMixin
from django.db import models

# Create your models here.

class CustomUserManager(BaseUserManager) :
    def create_user (self , phone_number , password=None) :
        if not phone_number :
            raise ValueError("User must have a phone number")
        
        user = self.model(phone_number=phone_number)
        
        user.set_password(password)
        
        user.save(using=self._db)
        
        return user
    
    def create_superuser (self , phone_number , password=None) :
        
        user = self.create_user(phone_number , password=password)
        
        user.is_admin = True
        user.is_superuser = True
        user.is_staff = True
        
        user.save(using=self._db)
        return user
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