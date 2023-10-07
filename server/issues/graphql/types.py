from graphene_django import DjangoObjectType

from issues.models import Issue


class IssueQueryType(DjangoObjectType):
    class Meta:
        model = Issue
        fields = (
            "id",
            "title",
            "description",
            "type",
            "assignee",
        )
