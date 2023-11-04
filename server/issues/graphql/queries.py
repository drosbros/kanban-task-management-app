import graphene
from graphql_jwt.decorators import login_required

from issues.models import Issue
from .types import IssueType


class Query(graphene.ObjectType):
    issues = graphene.List(IssueType)
    issue_by_id = graphene.Field(IssueType, pk=graphene.Int())
    issues_by_assignee_id = graphene.List(IssueType, pk=graphene.Int())
    issues_by_creator_id = graphene.List(IssueType, pk=graphene.Int())

    @staticmethod
    @login_required
    def resolve_issues(_, info, **kwargs):
        return Issue.objects.all()

    @staticmethod
    @login_required
    def resolve_issue_by_id(_, _info, pk: int, **kwargs):
        return Issue.objects.filter(pk=pk).first()

    @staticmethod
    @login_required
    def resolve_issues_by_assignee_id(_, _info, pk: int, **kwargs):
        return Issue.objects.filter(assignee_id=pk)

    @staticmethod
    @login_required
    def resolve_issues_by_creator_id(_, _info, pk: int, **kwargs):
        return Issue.objects.filter(creator_id=pk).first()
