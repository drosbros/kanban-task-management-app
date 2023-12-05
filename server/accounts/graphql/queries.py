import graphene

from commons.utils import graphql_resolver
from .types import UserQueryType
from ..models import User


class Query(graphene.ObjectType):
    users = graphene.List(UserQueryType)

    @graphql_resolver
    def resolve_users(_, _info):
        return User.objects.all()
