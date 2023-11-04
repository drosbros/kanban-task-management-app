from categories.models import Category
from commons.types import GrapheneObjectType


class CategoryType(GrapheneObjectType):
    class Meta:
        model = Category
        fields = "__all__"
