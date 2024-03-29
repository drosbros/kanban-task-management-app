import graphene

from categories.graphql.types import CategoryType
from categories.models import Category
from commons.utils import graphql_resolver


class Query(graphene.ObjectType):
    categories = graphene.List(CategoryType)
    category_by_id = graphene.Field(CategoryType, pk=graphene.Int())
    categories_by_creator_id = graphene.Field(CategoryType, pk=graphene.Int())

    @graphql_resolver
    def resolve_categories(_, info, **kwargs):
        return Category.objects.all()

    @graphql_resolver
    def resolve_category_by_id(_, _info, pk: int, **kwargs):
        return Category.objects.filter(pk=pk).first()

    @graphql_resolver
    def resolve_categories_by_creator_id(_, _info, pk: int, **kwargs):
        return Category.objects.filter(creator_id=pk).first()
