from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from .services import otp_verifier

User = get_user_model()

class PhoneNumberBackend(ModelBackend) :
    
    def authenticate(self, request, phone_number = None, Otp_Code = None, **kwargs):
        username = kwargs.get("username")
        
        identifier = phone_number or username
        
        try :
            user = User.objects.get(phone_number=identifier)
            
            if Otp_Code :
                return user if otp_verifier(user , Otp_Code) else None
            
        except User.DoesNotExist :
            return None                     
        
        return None
