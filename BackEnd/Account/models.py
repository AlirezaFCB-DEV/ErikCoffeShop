from django.contrib.auth.models import AbstractBaseUser , BaseUserManager
from django.db import models

# Create your models here.

class Custom_User_Manager(BaseUserManager) :
    def create_user (self , phone_number , password=None) :
        if not phone_number :
            raise ValueError("User must have an email address")
        
        user = self.model(phone_number=phone_number)
        
        user.set_password(password)
        
        user.save(using=self.db)
        
        return user
    
    def create_superuser (self , phone_number , password=None) :
        
        user = self.create_user(phone_number , password=password)
        
        user.is_admin = True
        user.save(using=self.db)
        return user
class Custom_User(AbstractBaseUser) :
    phone_number = models.CharField(max_length=11)
    
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    
    objects = Custom_User_Manager()
    
    USERNAME_FIELD = "phone_number"
    
    def __str__(self):
        return self.phone_number
    
    def has_perm(self , perm , obj=None) :
        return True
    
    def has_module_perms(self , app_label) :
        return True