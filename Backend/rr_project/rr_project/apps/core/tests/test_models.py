from django.test import TestCase


from core.models import Recipe, Ingredient


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
