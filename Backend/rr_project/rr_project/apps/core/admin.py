from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from rest_framework_simplejwt.tokens import OutstandingToken

from .models import Category, Recipe, User


class UserAdmin(admin.ModelAdmin):
    list_display = [
        "email",
    ]

    def has_delete_permission(self, request, obj=None):
        if request.POST and request.POST.get("action") == "delete_selected":
            return "1" not in request.POST.getlist("_selected_action")
        return obj is None or obj.pk != 1

    # Need to return to this function and getting more about it
    def BE_AWARE_NO_WARNING_clear_tokens_and_delete(self, request, queryset):
        users = queryset.values("email")
        OutstandingToken.objects.filter(user__email__in=users).delete()
        queryset.delete()

    actions = ["BE_AWARE_NO_WARNING_clear_tokens_and_delete"]


class RecipeAdmin(admin.ModelAdmin):
    list_display = ["title", "category"]
    prepopulated_fields = {"slug": ("title",)}


class CategoryAdmin(admin.ModelAdmin):
    list_display = [
        "name",
    ]


admin.site.register(User, UserAdmin)
admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Category, CategoryAdmin)
