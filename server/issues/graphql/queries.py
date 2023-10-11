import graphene

from issues.models import Issue
from .types import IssueQueryType


class Query(graphene.ObjectType):
    issues = graphene.List(IssueQueryType)

    @staticmethod
    def resolve_issues(_, _info):
        return Issue.objects.all()
