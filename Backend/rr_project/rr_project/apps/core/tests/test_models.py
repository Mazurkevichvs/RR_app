from django.test import TestCase


from core.models import Recipe


class ModelTests(TestCase):

    def test_recipe_str(self):
        """Test the recipe string representation"""
        recipe = Recipe.objects.create(
            title='Crispy chiken with cheese',
            time_minutes=5,
        )

        self.assertEqual(str(recipe), recipe.title)
