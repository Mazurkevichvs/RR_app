from django.db import models
from django.urls import reverse
from django.contrib.auth.models import AbstractUser
from django.conf import settings


from .managers import CustomUserManager


User = settings.AUTH_USER_MODEL


class User(AbstractUser):
    email = models.EmailField(primary_key=True)
    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'email'
    is_anonymous = False
    is_authenticated = True

    object = CustomUserManager()

    def __str__(self):
        return self.email


class Recipe(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null = True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    time_minutes = models.IntegerField(default=0)
    slug = models.CharField(max_length=255)
    ingredients = models.TextField(default='')


    class Meta:
        verbose_name = 'recipe'
        verbose_name_plural = 'recipes'


    def __str__(self):
        return self.title


    def get_absolute_url(self):
        return reverse('recipe:recipe-detail', args=[self.id])
