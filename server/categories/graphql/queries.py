import graphene
from graphql_jwt.decorators import login_required

from categories.graphql.types import CategoryType
from categories.models import Category


class Query(graphene.ObjectType):
    categories = graphene.List(CategoryType)
    category_by_id = graphene.Field(CategoryType, pk=graphene.Int())

    @staticmethod
    @login_required
    def resolve_categories(_, info, **kwargs):
        print(info.context.user)
        return Category.objects.all()

    @staticmethod
    @login_required
    def resolve_category_by_id(_, _info, pk: int, **kwargs):
        return Category.objects.filter(pk=pk).first()
