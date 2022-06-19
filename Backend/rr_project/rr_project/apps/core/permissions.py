from rest_framework import permissions


class IsOwnerOrIsAdminUser(permissions.IsAuthenticated):
    def has_object_permission(self, request, view, obj):
        # only owner can get details view data
        return bool(obj.user == request.user) or bool(
            request.user and request.user.is_staff
        )
