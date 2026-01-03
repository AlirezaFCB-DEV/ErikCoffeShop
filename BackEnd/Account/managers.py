from django.contrib.auth.models import BaseUserManager

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
        
        user.is_superuser = True
        user.is_staff = True
        
        user.save(using=self._db)
        return user