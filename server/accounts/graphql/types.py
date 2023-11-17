from accounts.models import User
from commons.types import GrapheneObjectType


class UserQueryType(GrapheneObjectType):
    class Meta:
        model = User
        exclude = ("password",)
