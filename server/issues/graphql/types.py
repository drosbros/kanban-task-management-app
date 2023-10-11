from graphene_django import DjangoObjectType

from issues.models import Issue


class IssueQueryType(DjangoObjectType):
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
