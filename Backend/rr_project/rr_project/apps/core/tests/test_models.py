from django.test import TestCase


from core.models import Recipe
from recipe.tests.test_recipe_api import sample_recipe


class RecipeModelTests(TestCase):

    def test_recipe_str(self):
        """Test the recipe string representation"""
        recipe = Recipe.objects.create(
            title='Crispy chiken with cheese',
            time_minutes=5,
        )

        self.assertEqual(str(recipe), recipe.title)
