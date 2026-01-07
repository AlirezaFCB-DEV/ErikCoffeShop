import re
import random
from django.utils import timezone
from datetime import timedelta

from .models import Otp


def is_phone(phone: str):
    pattern = r"^(?:\+98|0)?9\d{9}$"
    return re.match(pattern, phone)


def otp_generator():
    otp = str(random.randint(100000, 999999))
    return otp


def otp_verifier(identifier, otp_code):
    try:
        otp_record = Otp.objects.get(phone=identifier)
        if otp_record.code == otp_code:

            if otp_record.created_at + timedelta(minutes=2) < timezone.now() or otp_record.attempts > 3:
                otp_record.delete()
                return False

            otp_record.delete()
            return True
        else:
            otp_record.attempts += 1
            otp_record.save()

            return False

    except Otp.DoesNotExist:
        return False
