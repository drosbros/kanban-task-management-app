import graphene

from accounts.models import User
from issues.graphql.types import IssueType
from issues.models import Issue


class CreateIssue(graphene.Mutation):
    class Arguments:
        title = graphene.String()
        description = graphene.String()
        issue_type = graphene.Enum.from_enum(Issue.IssueTypeChoices)()
        assignee_id = graphene.String(required=False, default_value=None)

    ok = graphene.Boolean()
    issue = graphene.Field(IssueType)

    @staticmethod
    def mutate(_, _info, title: str, description: str, issue_type: Issue.IssueTypeChoices, assignee_id: int | None):
        assignee = User.objects.filter(pk=assignee_id).first()
        issue = Issue.objects.create(title=title, description=description, type=issue_type, assignee=assignee)
        return CreateIssue(ok=True, issue=issue)


class Mutation(graphene.ObjectType):
    create_issue = CreateIssue.Field()
