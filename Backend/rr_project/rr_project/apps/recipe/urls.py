from rest_framework.routers import DefaultRouter
from django.urls import path, include


from recipe import views


router_recipe = DefaultRouter()
router_recipe.register('recipes', views.RecipeViewSet)


app_name = 'recipe'


urlpatterns = [
    path('', include(router_recipe.urls))
]
