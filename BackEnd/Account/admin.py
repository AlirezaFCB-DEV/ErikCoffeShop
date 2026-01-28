from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError

from Account.models import CustomUser, Otp , Address

# Register your models here.


class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label="Password", widget=forms.PasswordInput)
    password2 = forms.CharField(
        label="Password Confirmation", widget=forms.PasswordInput)

    class Meta:
        model = CustomUser
        fields = ["phone_number", "email", "first_name", "last_name"]

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")

        if password1 and password2 and password1 != password2:
            raise ValidationError("Password don't match")
        return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = CustomUser
        fields = ["email", "password", "first_name", "last_name",
                  "phone_number", "is_active", "is_staff", "is_superuser"]


class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ["phone_number", "first_name", "last_name",
                    "email", "is_staff", "is_active", "is_superuser"]
    list_filter = ["phone_number", "email", "is_staff", "is_superuser" , "is_active"]
    fieldsets = [
        (None, {"fields": ["phone_number", "password"]}),
        ("personal_info", {"fields": ["first_name", "last_name", "email"]}),
        ("permissions", {"fields": ["is_superuser", "is_staff", "is_active"]})
    ]

    add_fieldsets = [
        (None, {"classes": ["wide"], "fields": ["phone_number", "first_name",
         "last_name", "email", "is_staff", "is_superuser", "password1", "password2"], },),

    ]

    search_fields = ["phone_number" , "email" , "first_name" , "last_name"]
    ordering = ["first_name" , "last_name"]
    filter_horizontal = []
    


admin.site.register(CustomUser , UserAdmin )
admin.site.register(Otp)
admin.site.register(Address)

