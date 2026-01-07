import re 
import random

def is_phone(phone : str) :
    pattern = r"^(?:\+98|0)?9\d{9}$"
    return re.match(pattern , phone)

def otp_generator() :
        otp = str(random.randint(100000,999999))
        return otp