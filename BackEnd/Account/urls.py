from django.urls import path
from . import views

urlpatterns = [
    path("otp-sender/" , views.otp_sender , name="otp_sender"),
    path("login/" , views.login_view , name="login_view"),
    path("signup/" , views.signup_view , name="signup_view")
]