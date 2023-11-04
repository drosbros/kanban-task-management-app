import graphene
from graphql_jwt.decorators import login_required

from boards.graphql.types import BoardType
from boards.models import Board


class Query(graphene.ObjectType):
    boards = graphene.List(BoardType)
    board_by_id = graphene.Field(BoardType, pk=graphene.Int())

    @staticmethod
    @login_required
    def resolve_boards(_, info, **kwargs):
        print(info.context.user)
        return Board.objects.all()

    @staticmethod
    def resolve_board_by_id(_, _info, pk: int, **kwargs):
        return Board.objects.filter(pk=pk).first()
