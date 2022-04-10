from django.contrib import admin
from django.urls import path, include
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.reverse import reverse


from core.models import Recipe, Ingredient


api_urls = [
    path('recipe/', include('recipe.urls'), name='recipe-api'),
]


class ListApi(APIView):

    def get(self, request, format=None):
        first_recipe = Recipe.objects.first()
        first_ingredient = Ingredient.objects.first()
        api_urls = {
            'List-recipes': reverse('recipe:recipe-list', request=request),
            'Detail-recipe': reverse(
                'recipe:recipe-detail',
                request=request,
                args=(first_recipe.id,)
            ),
            'Create-recipe': reverse('recipe:recipe-create', request=request),
            'List-ingredients': reverse(
                'recipe:ingredient-list',
                request=request
            ),
            'Detail-ingredient': reverse(
                'recipe:ingredient-detail',
                request=request,
                args=(first_ingredient.id,)
            ),
            'Create-ingredient': reverse(
                'recipe:ingredient-create',
                request=request
            ),
        }

        return Response(api_urls)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/list/', ListApi.as_view()),
    path('api/list/', include(api_urls)),
]
