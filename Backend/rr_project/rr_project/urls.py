from core.models import Recipe
from django.contrib import admin
from django.urls import include, path
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

api_urls = [
    path("recipe/", include("recipe.urls"), name="recipe-api"),
    path("account/", include("account.urls"), name="account-api"),
]


class ListApi(APIView):
    def get(self, request, format=None):
        first_recipe = Recipe.objects.first()
        api_urls = {
            "List-recipes": reverse("recipe:recipe-list", request=request),
            "Create-recipe": reverse("recipe:recipe-create", request=request),
            "Create-category": reverse("recipe:category-create", request=request),
            "Random-recipe": reverse("recipe:recipe-random", request=request),
            "Random-own-recipe": reverse(
                "recipe:recipe-random-private", request=request
            ),
            "Account-login": reverse("account:login", request=request),
            "Account-token": reverse("account:token_obtain_pair", request=request),
            "Account-token-refresh": reverse("account:token_refresh", request=request),
            "Account-create": reverse("account:create", request=request),
            "Account-me": reverse("account:me", request=request),
        }
        if not first_recipe:
            return Response(api_urls)
        else:
            api_urls["Detail-recipe"] = reverse(
                "recipe:recipe-detail", request=request, args=(first_recipe.id,)
            )
            return Response(api_urls)

    def get_authenticators(self):
        if self.request.method == "GET":
            return []


urlpatterns = [
    # path('admin/', admin.site.urls),
    path("api/", ListApi.as_view()),
    path("api/", include(api_urls)),
]
