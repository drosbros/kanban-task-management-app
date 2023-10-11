import graphene

from issues.models import Issue
from .types import IssueType


class Query(graphene.ObjectType):
    issues = graphene.List(IssueType)
    issue_by_id = graphene.Field(IssueType, pk=graphene.Int())

    @staticmethod
    def resolve_issues(_, _info, **kwargs):
        return Issue.objects.all()

    @staticmethod
    def resolve_issue_by_id(_, _info, pk: int, **kwargs):
        return Issue.objects.filter(pk=pk).first()
