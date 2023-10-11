import graphene

from .types import UserQueryType
from ..models import User


class Query(graphene.ObjectType):
    users = graphene.List(UserQueryType)

    @staticmethod
    def resolve_users(_, _info):
        return User.objects.all()
