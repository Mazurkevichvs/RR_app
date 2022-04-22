from rest_framework import serializers

from core.models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)


    class Meta:
        model = Recipe
        fields = ('__all__')


class RecipeDetailSerializer(RecipeSerializer):
    pass
