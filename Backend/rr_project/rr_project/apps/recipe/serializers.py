from rest_framework import serializers

from core.models import Category, Recipe


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("name",)


class RecipeSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Recipe
        fields = "__all__"


class RecipeDetailSerializer(RecipeSerializer):
    category = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Recipe
        fields = "__all__"
