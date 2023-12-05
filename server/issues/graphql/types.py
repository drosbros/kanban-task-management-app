from commons.types import GrapheneObjectType
from issues.models import Issue, SubIssue


class IssueType(GrapheneObjectType):
    class Meta:
        convert_choices_to_enum = False
        model = Issue
        fields = "__all__"


class SubIssueType(GrapheneObjectType):
    class Meta:
        model = SubIssue
        fields = "__all__"
