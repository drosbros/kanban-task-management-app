import graphene
from graphql_jwt.decorators import login_required

from boards.graphql.types import BoardType
from boards.models import Board


class Query(graphene.ObjectType):
    boards = graphene.List(BoardType)
    board_by_id = graphene.Field(BoardType, pk=graphene.Int())
    boards_by_creator_id = graphene.Field(BoardType, pk=graphene.Int())

    @staticmethod
    @login_required
    def resolve_boards(_, info, **kwargs):
        return Board.objects.all()

    @staticmethod
    @login_required
    def resolve_board_by_id(_, _info, pk: int, **kwargs):
        return Board.objects.filter(pk=pk).first()

    @staticmethod
    @login_required
    def resolve_boards_by_creator_id(_, _info, pk: int, **kwargs):
        return Board.objects.filter(creator_id=pk).first()
