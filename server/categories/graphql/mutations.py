import graphene
from graphql_jwt.decorators import login_required

from categories.graphql.types import CategoryType
from categories.models import Category


class CreateCategory(graphene.Mutation):
    ok = graphene.Boolean()
    category = graphene.Field(CategoryType)

    class Arguments:
        name = graphene.String()
        board_id = graphene.Int()

    @staticmethod
    @login_required
    def mutate(root, info, name: str, board_id: int):
        category = Category.objects.create(name=name, board_id=board_id, creator=info.context.user)
        return CreateCategory(ok=True, category=category)


class DeleteCategory(graphene.Mutation):
    ok = graphene.Boolean()
    category = graphene.Field(CategoryType, required=False)

    class Arguments:
        category_id = graphene.Int()

    @staticmethod
    @login_required
    def mutate(root, info, category_id: int):
        category = Category.objects.filter(pk=category_id).first()

        if category is None:
            return DeleteCategory(ok=True, category=None)

        category.delete()
        return DeleteCategory()


class Mutation(graphene.ObjectType):
    create_category = CreateCategory.Field()
    delete_category = DeleteCategory.Field()
