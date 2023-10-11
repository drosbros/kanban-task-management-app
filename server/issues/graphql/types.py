from commons.types import GrapheneObjectType
from issues.models import Issue


class IssueType(GrapheneObjectType):
    class Meta:
        convert_choices_to_enum = False
        model = Issue
        fields = (
            "id",
            "title",
            "description",
            "type",
            "assignee",
        )
