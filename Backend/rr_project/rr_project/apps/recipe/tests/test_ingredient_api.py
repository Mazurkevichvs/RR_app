from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.test import APIClient

from core.models import Recipe, Ingredient
from recipe import serializers


INGREDIENTS_URL = reverse('recipe:ingredient-list')


class PublicIngredientApiTests(TestCase):

    def setUp(self):
        self.client = APIClient()


    def test_access_to_site_as_offline_user(self):
        res = self.client.get(INGREDIENTS_URL)

        self.assertEqual(res.status_code, status.HTTP_200_OK)


    def test_retrive_ingredients(self):
        Ingredient.objects.create(name='Sugar')
        Ingredient.objects.create(name='Vanilia')

        res = self.client.get(INGREDIENTS_URL)

        ingredients = Ingredient.objects.all()
        serializer = serializers.IngredientSerializer(ingredients, many=True)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)
