from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from django.utils import timezone
from datetime import timedelta

from .models import Otp

User = get_user_model()

class PhoneNumberBackend(ModelBackend) :
    def authenticate(self, request, phone_number = None, Otp_Code = None, **kwargs):
        username = kwargs.get("username")
        
        identifier = phone_number or username
        
        try :
            user = User.objects.get(phone_number=identifier)
            
            if Otp_Code :
                return user if self.otp_verifier(user , Otp_Code) else None
            
        except User.DoesNotExist :
            return None                 
            
        
        
        return None
            
    def otp_verifier(self , user_obj , otp_code) :
        try :
            otp_record = Otp.objects.get(user=user_obj)
            if otp_record.code  == otp_code :
                
                if otp_record.created_at + timedelta(minutes=2) < timezone.now() or otp_record.attempts > 3:
                    otp_record.delete()
                    return False
                
                otp_record.delete()
                return True
            else :
                otp_record.attempts += 1
                otp_record.save()
                
                return False
                    
        except Otp.DoesNotExist :
            return False
        