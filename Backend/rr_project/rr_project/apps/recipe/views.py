from rest_framework import viewsets


from recipe import serializers
from core.models import Recipe


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = serializers.RecipeSerializer
