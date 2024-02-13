import graphene

from boards.graphql.types import BoardType
from boards.models import Board
from commons.utils import graphql_resolver


class CreateBoard(graphene.Mutation):
    ok = graphene.Boolean()
    board = graphene.Field(BoardType)

    class Arguments:
        name = graphene.String()

    @graphql_resolver
    def mutate(root, info, name: str):
        board = Board.objects.create(name=name, creator=info.context.user)
        return CreateBoard(ok=True, board=board)


class DeleteBoard(graphene.Mutation):
    ok = graphene.Boolean()
    board = graphene.Field(BoardType, required=False)

    class Arguments:
        board_id = graphene.Int()

    @graphql_resolver
    def mutate(root, info, board_id: int):
        board = Board.objects.filter(pk=board_id).first()

        if board is None:
            return DeleteBoard(ok=True, board=None)

        board.delete()
        return DeleteBoard()


class Mutation(graphene.ObjectType):
    create_board = CreateBoard.Field()
    delete_board = DeleteBoard.Field()
