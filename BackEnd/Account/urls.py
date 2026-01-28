from django.urls import path , include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r"address" , views.AddressViewSet , basename="address_view")

urlpatterns = [
    path("" , include(router.urls)),
    path("otp-sender/" , views.otp_sender , name="otp_sender"),
    path("login/" , views.login_view , name="login_view"),
    path("signup/" , views.signup_view , name="signup_view"),
]