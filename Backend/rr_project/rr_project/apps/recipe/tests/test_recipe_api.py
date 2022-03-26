from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.test import APIClient

from core.models import Recipe
from recipe import serializers


RECIPE_LIST = reverse('recipe:recipe-list')


def detail_url(recipe_id):
    return reverse('recipe:recipe-detail', args=[recipe_id])


def sample_recipe(**params):
    defaults = {
        'title': 'Sample recipe',
        'description': 'Sample description',
        'time_minutes': 10,
    }

    defaults.update(params)

    return Recipe.objects.create(**defaults)


class PublicRecipeApiTests(TestCase):

    def setUp(self):
        self.client = APIClient()


    def test_access_to_site_as_offline_user(self):
        res = self.client.get(RECIPE_LIST)

        self.assertEqual(res.status_code, status.HTTP_200_OK)


    def test_retrieve_recipes(self):
        recipe1 = sample_recipe()
        recipe2 = sample_recipe(title='Sample2')

        res = self.client.get(RECIPE_LIST)

        recipes = Recipe.objects.order_by('id')
        serializer = serializers.RecipeSerializer(recipes, many=True)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)
        self.assertEqual(res.data[1]['title'], 'Sample2')


    def test_retrieve_recipe_by_id(self):
        recipe1 = sample_recipe()

        url = detail_url(recipe1.id)
        res = self.client.get(url)

        serializer = serializers.RecipeDetailSerializer(recipe1)

        self.assertEqual(res.data, serializer.data)
