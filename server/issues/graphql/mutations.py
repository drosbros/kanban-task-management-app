import graphene

from accounts.models import User
from issues.graphql.types import IssueType
from issues.models import Issue


class CreateIssue(graphene.Mutation):
    ok = graphene.Boolean()
    issue = graphene.Field(IssueType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        issue_type = graphene.Enum.from_enum(Issue.IssueTypeChoices)()
        assignee_id = graphene.Int(required=False, default_value=None)

    @staticmethod
    def mutate(root, info, title: str, description: str, issue_type: Issue.IssueTypeChoices, assignee_id: int | None):
        assignee = User.objects.filter(pk=assignee_id).first()
        issue = Issue.objects.create(title=title, description=description, type=issue_type, assignee=assignee)
        return CreateIssue(ok=True, issue=issue)


class DeleteIssue(graphene.Mutation):
    ok = graphene.Boolean()
    issue = graphene.Field(IssueType, required=False)

    class Arguments:
        issue_id = graphene.Int()

    @staticmethod
    def mutate(_, _info, issue_id: int):
        issue = Issue.objects.filter(pk=issue_id).first()

        if issue is None:
            return DeleteIssue(ok=False, issue=None)

        issue.delete()
        return DeleteIssue(ok=True, issue=issue)


class Mutation(graphene.ObjectType):
    create_issue = CreateIssue.Field()
    delete_issue = DeleteIssue.Field()
