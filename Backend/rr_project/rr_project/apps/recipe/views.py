from random import choice
from django.shortcuts import redirect
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveUpdateDestroyAPIView,
)


from recipe import serializers
from core.models import Recipe
from core.permissions import (
    IsOwnerOrIsAdminUser,
)


class CategoryCreateAPIView(CreateAPIView):
    serializer_class = serializers.CategorySerializer
    permission_classes = [IsAdminUser]


category_create_api_view = CategoryCreateAPIView.as_view()


class RecipeListAPIView(ListAPIView):
    serializer_class = serializers.RecipeSerializer
    queryset = Recipe.objects.all()


recipe_list_api_view = RecipeListAPIView.as_view()


class RecipeDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.RecipeSerializer
    queryset = Recipe.objects.all()
    lookup_field = 'id'


    def get_permissions(self):
        if self.request.method in ['PUT', 'DELETE', 'PATCH']:
            return [IsOwnerOrIsAdminUser()]
        return []


    # def get_authenticators(self):
    #     if self.request.method in ['PUT', 'DELETE', 'PATCH']:
    #         return [JWTAuthentication()]
    #     return []


recipe_detail_api_view = RecipeDetailAPIView.as_view()


class RecipeCreateAPIView(CreateAPIView):
    serializer_class = serializers.RecipeSerializer
    permission_classes = [IsAuthenticated]


    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


recipe_create_api_view = RecipeCreateAPIView.as_view()


class RandomRecipeAPIView(ListAPIView):
    serializer_class = serializers.RecipeDetailSerializer


    def get_queryset(self):
        result_id = 0
        if Recipe.objects.first():
            ids = Recipe.objects.values_list('id', flat=True)
            result_id = choice(ids)
        return Recipe.objects.filter(id=result_id)


random_api_view = RandomRecipeAPIView.as_view()


class RandomPrivateRecipeAPIView(ListAPIView):
    serializer_class = serializers.RecipeDetailSerializer
    permission_classes = [IsAuthenticated]


    def get_queryset(self):
        user = self.request.user
        result_id = 0
        user_filter = Recipe.objects.filter(user=user)
        if user_filter:
            if user_filter.first():
                ids = user_filter.values_list('id', flat=True)
                result_id = choice(ids)
        return Recipe.objects.filter(id=result_id)


random_private_api_view = RandomPrivateRecipeAPIView.as_view()
