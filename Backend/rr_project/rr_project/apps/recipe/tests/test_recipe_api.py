from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.test import APIClient

from core.models import Recipe, Ingredient
from recipe import serializers


RECIPE_LIST = reverse('recipe:recipe-list')


def sample_recipe(**params):
    defaults = {
        'title': 'Sample recipe',
        'description': 'Sample description',
        'time_minutes': 10,
        'slug': 'sample_slug',
    }

    defaults.update(params)

    return Recipe.objects.create(**defaults)


def sample_ingredient(name='Sample ingredient'):
    return Ingredient.objects.create(name=name)


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
        recipe1.ingredients.add(sample_ingredient())

        url = recipe1.get_absolute_url()
        res = self.client.get(url)

        serializer = serializers.RecipeDetailSerializer(recipe1)

        self.assertEqual(res.data, serializer.data)


    def test_create_recipe_with_ingredients(self):
        ingredient1 = sample_ingredient(name='Milk')
        ingredient2 = sample_ingredient(name='Cocoa')
        payload = {
            'title': 'Cocoa with milk',
            'description': 'Put coco into milk and stir',
            'time_minutes': 5,
            'slug': 'milk_cocoa',
            'ingredients': [ingredient1.id, ingredient2.id],
        }
        res = self.client.post(reverse('recipe:recipe-create'), payload)
        
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        recipe = Recipe.objects.get(id=res.data['id'])
        ingredients = recipe.ingredients.all()
        self.assertEqual(ingredients.count(), 2)
        self.assertIn(ingredient1, ingredients)
        self.assertIn(ingredient2, ingredients)
