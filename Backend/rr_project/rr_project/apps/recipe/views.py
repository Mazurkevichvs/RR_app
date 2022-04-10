from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveUpdateDestroyAPIView
)


from recipe import serializers
from core.models import Recipe


class RecipeListAPIView(ListAPIView):
    serializer_class = serializers.RecipeSerializer
    queryset = Recipe.objects.all()


recipe_list_api_view = RecipeListAPIView.as_view()


class RecipeDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.RecipeDetailSerializer
    queryset = Recipe.objects.all()
    lookup_field = 'id'


recipe_detail_api_view = RecipeDetailAPIView.as_view()


class RecipeCreateAPIView(CreateAPIView):
    serializer_class = serializers.RecipeSerializer


recipe_create_api_view = RecipeCreateAPIView.as_view()
