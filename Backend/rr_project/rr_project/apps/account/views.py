from django.conf import settings
from django.contrib.auth import authenticate, login
from django.middleware import csrf
from rest_framework import status
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserSerializer


def get_tokens_for_user(user):
    
    # TODO : DO not create new tokens when log in, check if exist in DB
    refresh = RefreshToken.for_user(user)
    return {
        "access": str(refresh.access_token),
    }


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # What should be returned in api response
        # data['email'] = self.user.email

        serializer = UserSerializer(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


token_view = MyTokenObtainPairView.as_view()


class LoginView(APIView):
    def post(self, request, format=None):
        data = request.data
        response = Response()
        username = data.get("username", None)
        password = data.get("password", None)
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                data = get_tokens_for_user(user)
                response.set_cookie(
                    key=settings.SIMPLE_JWT["AUTH_COOKIE"],
                    value=data["access"],
                    secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                    httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
                    samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
                    max_age=int(
                        settings.SIMPLE_JWT["ACCESS_TOKEN_LIFETIME"].total_seconds()
                    ),
                )
                csrf.get_token(request)
                response.data = {"Success": "Login successfully", "data": data}
                return response
            else:
                return Response(
                    {"No active": "This account is not active!!"},
                    status=status.HTTP_404_NOT_FOUND,
                )
        else:
            return Response(
                {"Invalid": "Invalid username or password!!"},
                status=status.HTTP_404_NOT_FOUND,
            )


login_view = LoginView.as_view()


class LogoutView(APIView):
    permission_classes = [
        IsAuthenticated,
    ]
    # Take a look here, change to POST request, some issues with csrf token
    def get(self, request):
        try:
            response = Response()
            response.delete_cookie(settings.SIMPLE_JWT["AUTH_COOKIE"])
            response.delete_cookie("csrftoken")
            response.data = {"result": "User logout successfully"}
            return response
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


logout_view = LogoutView.as_view()


class CreateUserView(CreateAPIView):
    """Create a new user in the system"""

    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        data_request = request.data
        serializer = UserSerializer(data=data_request)
        response = Response()
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data["response"] = "Successfully registered a new user!"
            data["email"] = user.email
            data["token"] = serializer.get_token(user)
            new_user = authenticate(
                # TODO : See for better solution for authentication issue...
                # email=request.POST.get("email"),
                # password=request.POST.get("password"),
                email=data_request.get("email"),
                password=data_request.get("password"),
            )
            if new_user is not None and new_user.is_active:
                response.set_cookie(
                    key=settings.SIMPLE_JWT["AUTH_COOKIE"],
                    value=data["token"]["access"],
                    secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                    httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
                    samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
                    max_age=int(
                        settings.SIMPLE_JWT["ACCESS_TOKEN_LIFETIME"].total_seconds()
                    ),
                )
                csrf.get_token(request)
                response.data = {"Success": "User login successfully", "data": data}
                return response
        return Response(serializer.errors, status=400)


create_user_view = CreateUserView.as_view()


class ManageUserView(RetrieveUpdateDestroyAPIView):
    """Manage the authenticated user"""

    serializer_class = UserSerializer
    permission_classes = [
        IsAuthenticated,
    ]

    def get_object(self):
        """Retrieve and return authentication user"""
        return self.request.user

    def destroy(self, request, *args, **kwargs):
        """Delete a user ,setting is_active=False"""
        response = Response()
        request.user.is_active = False
        request.user.save()
        response.delete_cookie(settings.SIMPLE_JWT["AUTH_COOKIE"])
        response.data = {"result": "User deleted successfully"}
        return response


manage_user_view = ManageUserView.as_view()
