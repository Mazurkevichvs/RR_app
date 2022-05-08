from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.urls import reverse

from .managers import CustomUserManager

User = settings.AUTH_USER_MODEL


class User(AbstractBaseUser):
    email = models.EmailField(primary_key=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    REQUIRED_FIELDS = []
    USERNAME_FIELD = "email"

    is_anonymous = False
    is_authenticated = True

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Recipe(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, related_name="user_recipes"
    )
    title = models.CharField(max_length=255)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, related_name="recipes"
    )
    description = models.TextField(blank=True)
    time_minutes = models.IntegerField(default=0)
    slug = models.CharField(max_length=255)
    ingredients = models.TextField(default="")

    class Meta:
        verbose_name = "recipe"
        verbose_name_plural = "recipes"

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("recipe:recipe-detail", args=[self.id])
