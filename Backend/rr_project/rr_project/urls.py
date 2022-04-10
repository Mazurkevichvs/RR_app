from django.contrib import admin
from django.urls import path, include
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.reverse import reverse


from core.models import Recipe


api_urls = [
    path('recipe/', include('recipe.urls'), name='recipe-api'),
]


class ListApi(APIView):

    def get(self, request, format=None):
        first_recipe = Recipe.objects.first()
        api_urls = {
            'List-recipes': reverse('recipe:recipe-list', request=request),
            'Detail-recipe': reverse(
                'recipe:recipe-detail',
                request=request,
                args=(first_recipe.id,)
            ),
            'Create-recipe': reverse('recipe:recipe-create', request=request),
        }

        return Response(api_urls)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', ListApi.as_view()),
    path('api/', include(api_urls)),
]
