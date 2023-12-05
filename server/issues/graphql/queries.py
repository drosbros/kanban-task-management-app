import graphene

from commons.utils import graphql_resolver
from issues.models import Issue, SubIssue
from .types import IssueType, SubIssueType


class Query(graphene.ObjectType):
    issues = graphene.List(IssueType)
    issue_by_id = graphene.Field(IssueType, pk=graphene.Int())
    issues_by_assignee_id = graphene.List(IssueType, pk=graphene.Int())
    issues_by_creator_id = graphene.List(IssueType, pk=graphene.Int())

    subissues = graphene.List(SubIssueType)
    subissue_by_id = graphene.Field(SubIssueType, pk=graphene.Int())
    subissues_by_parent_id = graphene.List(SubIssueType, pk=graphene.Int())

    @graphql_resolver
    def resolve_issues(_, _info, **kwargs):
        return Issue.objects.all()

    @graphql_resolver
    def resolve_issue_by_id(_, _info, pk: int, **kwargs):
        return Issue.objects.filter(pk=pk).first()

    @graphql_resolver
    def resolve_issues_by_assignee_id(_, _info, pk: int, **kwargs):
        return Issue.objects.filter(assignee_id=pk)

    @graphql_resolver
    def resolve_issues_by_creator_id(_, _info, pk: int, **kwargs):
        return Issue.objects.filter(creator_id=pk).first()

    @graphql_resolver
    def resolve_subissues(self, _info, **kwargs):
        return SubIssue.objects.all()

    @graphql_resolver
    def resolve_subissue_by_id(_, _info, pk: int, **kwargs):
        return SubIssue.objects.filter(pk=pk).first()

    @graphql_resolver
    def resolve_subissues_by_parent_id(_, _info, pk: int, **kwargs):
        return SubIssue.objects.filter(parent_id=pk).all()
