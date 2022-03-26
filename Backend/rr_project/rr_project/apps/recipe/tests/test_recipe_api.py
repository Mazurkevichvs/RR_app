from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.test import APIClient

from core.models import Recipe
from recipe.serializers import RecipeSerializer


class PublicRecipeApiTests(TestCase):

    def setUp(self):
        self.client = APIClient()


    def test_access_to_site_as_offline_user(self):
        res = self.client.get(reverse('recipe:recipe-list'))

        self.assertEqual(res.status_code, status.HTTP_200_OK)


    def test_retrieve_recipes(self):
        defaults = {
            'title': 'Sample recipe',
            'description': 'Test description',
            'time_minutes': 10,
        }

        sample1 = Recipe.objects.create(**defaults)
        sample2 = Recipe.objects.create(title='Sample2',description='sam2')

        res = self.client.get(reverse('recipe:recipe-list'))

        recipes = Recipe.objects.order_by('id')
        serializer = RecipeSerializer(recipes, many=True)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)
        self.assertEqual(sample2.title, 'Sample2')
