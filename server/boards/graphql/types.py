from boards.models import Board
from commons.types import GrapheneObjectType


class BoardType(GrapheneObjectType):
    class Meta:
        model = Board
        fields = "__all__"
