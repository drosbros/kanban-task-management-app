import graphene

from boards.graphql.types import BoardType
from boards.models import Board
from commons.utils import graphql_resolver


class Query(graphene.ObjectType):
    boards = graphene.List(BoardType)
    board_by_id = graphene.Field(BoardType, pk=graphene.Int())
    boards_by_creator_id = graphene.Field(BoardType, pk=graphene.Int())

    @graphql_resolver
    def resolve_boards(_, info, **kwargs):
        return Board.objects.all()

    @graphql_resolver
    def resolve_board_by_id(_, _info, pk: int, **kwargs):
        return Board.objects.filter(pk=pk).first()

    @graphql_resolver
    def resolve_boards_by_creator_id(_, _info, pk: int, **kwargs):
        return Board.objects.filter(creator_id=pk).first()
