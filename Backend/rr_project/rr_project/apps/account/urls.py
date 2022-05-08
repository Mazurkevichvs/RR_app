from django.urls import include, path
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView)

from .views import create_user_view, login_view, manage_user_view, token_view

app_name = "account"


urlpatterns = [
    path("token/", token_view, name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("login/", login_view, name="login"),
    path("create/", create_user_view, name="create"),
    path("me/", manage_user_view, name="me"),
]
