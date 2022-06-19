from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(
        style={"input_type": "password"},
        write_only=True,
        min_length=4,
        max_length=16,
        help_text="Passwords must match.",
    )
    user_recipes = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = get_user_model()
        fields = ("email", "password", "password2", "user_recipes")

        extra_kwargs = {
            "password": {
                "write_only": True,
                "min_length": 4,
                "max_length": 16,
                "style": {"input_type": "password"},
                "help_text": "Create password min 4 and max 16 characters.",
            },
        }

    def create(self, validated_data):
        """Create a new user with encrypted password and return it"""
        password = validated_data["password"]
        password2 = validated_data["password2"]
        if password != password2:
            raise serializers.ValidationError({"password": "Passwords must match."})
        validated_data.pop("password2")

        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        """Update a user, setting the password correctly and return it"""
        password = validated_data.pop("password", None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        return user

    def get_token(self, user):
        token = RefreshToken.for_user(user)
        access = str(token.access_token)
        data = {"access": access}
        return data
