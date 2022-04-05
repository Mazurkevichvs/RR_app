from django.urls import path


from recipe.views import (
    recipe_list_api_view,
    recipe_detail_api_view,
    recipe_create_api_view,
    ingredient_list_api_view,
    ingredient_detail_api_view,
    ingredient_create_api_view
)


app_name = 'recipe'


urlpatterns = [
    path('list/', recipe_list_api_view, name='recipe-list'),
    path('<int:id>/', recipe_detail_api_view, name='recipe-detail'),
    path('create/', recipe_create_api_view, name='recipe-create'),
    path('ingredient/list/', ingredient_list_api_view, name='ingredient-list'),
    path('ingredient/<int:id>/', ingredient_detail_api_view, name='ingredient-detail'),
    path('ingredient/create/', ingredient_create_api_view, name='ingredient-create')
]
