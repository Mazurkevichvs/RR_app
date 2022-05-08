from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from core.models import Recipe
from recipe import serializers

RECIPE_LIST = reverse("recipe:recipe-list")


def sample_recipe(**params):
    defaults = {
        "title": "Sample recipe",
        "description": "Sample description",
        "time_minutes": 10,
        "slug": "sample_slug",
        "ingredients": "sample, ingredients",
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
        recipe2 = sample_recipe(title="Sample2")

        res = self.client.get(RECIPE_LIST)

        recipes = Recipe.objects.order_by("id")
        serializer = serializers.RecipeSerializer(recipes, many=True)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)
        self.assertEqual(res.data[1]["title"], "Sample2")

    def test_retrieve_recipe_by_id(self):
        recipe1 = sample_recipe()

        url = recipe1.get_absolute_url()
        res = self.client.get(url)

        serializer = serializers.RecipeDetailSerializer(recipe1)

        self.assertEqual(res.data, serializer.data)

    def test_create_recipe(self):
        payload = {
            "title": "Cocoa with milk",
            "description": "Put coco into milk and stir",
            "time_minutes": 5,
            "slug": "milk_cocoa",
            "ingredients": "milk, cocoa",
        }

        res = self.client.post(reverse("recipe:recipe-create"), payload)

        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        recipe = Recipe.objects.get(id=res.data["id"])
        for key in payload.keys():
            self.assertEqual(payload[key], getattr(recipe, key))

    def test_partial_update_recipe(self):
        recipe = sample_recipe()
        payload = {"title": "Sauce for meat", "slug": "meat_sauce"}
        url = recipe.get_absolute_url()
        self.client.patch(url, payload)

        recipe.refresh_from_db()
        self.assertEqual(recipe.title, payload["title"])
        self.assertEqual(recipe.slug, payload["slug"])

    def test_full_update_recipe(self):
        recipe = sample_recipe()
        payload = {
            "title": "Spaghetti carbonara",
            "time_minutes": 25,
            "slug": "carbonara",
            "ingredients": "bacon",
        }
        url = recipe.get_absolute_url()
        self.client.put(url, payload)

        recipe.refresh_from_db()
        self.assertEqual(recipe.title, payload["title"])
        self.assertEqual(recipe.time_minutes, payload["time_minutes"])
        self.assertEqual(recipe.slug, payload["slug"])

    def test_retrive_random_recipe(self):
        recipe1 = sample_recipe()
        recipe2 = sample_recipe()
        recipe3 = sample_recipe()
        serializer1 = serializers.RecipeSerializer(recipe1)
        serializer2 = serializers.RecipeSerializer(recipe2)
        serializer3 = serializers.RecipeSerializer(recipe3)
        list_of_recipes = [serializer1.data, serializer2.data, serializer3.data]

        res = self.client.get(reverse("recipe:recipe-random"))

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertTrue(res.data["id"])
        self.assertIn(res.data, list_of_recipes)
