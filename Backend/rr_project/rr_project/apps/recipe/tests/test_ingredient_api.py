from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.test import APIClient

from core.models import Recipe, Ingredient
from recipe import serializers


INGREDIENT_LIST = reverse('recipe:ingredient-list')


class PublicIngredientApiTests(TestCase):

    def setUp(self):
        self.client = APIClient()


    def test_access_to_site_as_offline_user(self):
        res = self.client.get(INGREDIENT_LIST)

        self.assertEqual(res.status_code, status.HTTP_200_OK)


    def test_retrive_ingredients(self):
        Ingredient.objects.create(name='Sugar')
        Ingredient.objects.create(name='Vanilia')

        res = self.client.get(INGREDIENT_LIST)

        ingredients = Ingredient.objects.all()
        serializer = serializers.IngredientSerializer(ingredients, many=True)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)


    def test_ingredient_create_successful(self):
        payload = {'name': 'Sample ingredient'}
        self.client.post(reverse('recipe:ingredient-create'), payload)

        exists = Ingredient.objects.filter(
            name=payload['name'],
        ).exists()
        self.assertTrue(exists)


    def test_create_ingredient_invalid(self):
        payload = {'name': ''}
        res = self.client.post(reverse('recipe:ingredient-create'), payload)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
