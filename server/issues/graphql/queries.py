import graphene

from issues.models import Issue
from .types import IssueQueryType


class Query(graphene.ObjectType):
    issues = graphene.List(IssueQueryType)

    def resolve_issues(self, info):
        return Issue.objects.all()
