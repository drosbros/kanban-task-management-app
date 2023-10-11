from graphene_django import DjangoObjectType

from accounts.models import User


class UserQueryType(DjangoObjectType):
    class Meta:
        model = User
        fields = (
            "id",
            "email",
        )
