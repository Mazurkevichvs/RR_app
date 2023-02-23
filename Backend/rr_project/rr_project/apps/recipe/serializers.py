from core.models import Category, Recipe
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("name",)


class RecipeSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    # image_url = serializers.ImageField(required=False)

    class Meta:
        model = Recipe
        fields = "__all__"


class RecipeDetailSerializer(RecipeSerializer):
    category = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Recipe
        fields = "__all__"
