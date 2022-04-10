from django.test import TestCase


from core.models import Recipe, Ingredient
from recipe.tests.test_recipe_api import sample_ingredient, sample_recipe


class RecipeModelTests(TestCase):

    def test_recipe_str(self):
        """Test the recipe string representation"""
        recipe = Recipe.objects.create(
            title='Crispy chiken with cheese',
            time_minutes=5,
        )

        self.assertEqual(str(recipe), recipe.title)


class IngredientModelTests(TestCase):

    def test_ingredient_str(self):
        """Test the ingredient strin representation"""
        ingredient = Ingredient.objects.create(
            name='Chicken breast'
        )

        self.assertEqual(str(ingredient), ingredient.name)


    def test_recipe_is_related_to_ingredient(self):
        ingredient = sample_ingredient()
        recipe = sample_recipe()
        recipe.ingredients.add(ingredient)
        recipe.save()
        self.assertIn(recipe, ingredient.recipe_set.all())
