from django.contrib import admin
from django.urls import path, include
from rest_framework.views import APIView
from rest_framework.response import Response


api_urls = [
    path('api/recipe/', include('recipe.urls'), name='recipe-api'),
]


class ListApi(APIView):

    def get(self, request, format=None):
        api_urls = {
            'List-recipes': 'recipe/list/',
            'Detail-recipes': 'recipe/<int:id>/',
            'Create-recipe': 'recipe/create/',
        }

        return Response(api_urls)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/list/', ListApi.as_view()),
    path('', include(api_urls)),
]
