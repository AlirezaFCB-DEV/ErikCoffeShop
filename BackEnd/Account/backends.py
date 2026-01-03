from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from .models import Otp

User = get_user_model()

class PhoneNumberBackend(ModelBackend) :
    def authenticate(self, request, phone_number = None, Otp_Code = None, **kwargs):
        
        try :
            otp_obj = Otp.objects.filter(user__phone_number=phone_number).latest("created_at")
        except Otp.DoesNotExist :
            return None                    
            
        if Otp_Code == otp_obj.code :
            otp_obj.delete()
            try :
                user = User.objects.get(phone_number=phone_number)
                return user           
            except User.DoesNotExist :
                return None
        
        return None
            
        

    def get_user(self, user_id):
        try :
            return User.objects.get(pk=user_id)
        except User.DoesNotExist :
            return None