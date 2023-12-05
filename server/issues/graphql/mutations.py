import graphene
from graphql import GraphQLError

from accounts.models import User
from boards.models import Board
from categories.models import Category
from commons.utils import graphql_resolver
from issues.graphql.types import IssueType
from issues.models import Issue


class CreateIssue(graphene.Mutation):
    ok = graphene.Boolean()
    issue = graphene.Field(IssueType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        issue_type = graphene.Enum.from_enum(Issue.IssueTypeChoices)()
        board_id = graphene.Int()
        assignee_id = graphene.Int(required=False, default_value=None)
        category_id = graphene.Int(required=False, default_value=None)

    @graphql_resolver
    def mutate(
        root,
        info,
        title: str,
        description: str,
        issue_type: Issue.IssueTypeChoices,
        board_id: int,
        assignee_id: int | None,
        category_id: int | None,
    ):
        board = Board.objects.filter(pk=board_id).first()

        if not board:
            raise GraphQLError("Board not found")

        assignee = User.objects.filter(pk=assignee_id).first()
        category = Category.objects.filter(pk=category_id).first()

        issue = Issue.objects.create(
            title=title,
            description=description,
            type=issue_type,
            board=board,
            assignee=assignee,
            category=category,
            creator=info.context.user,
        )

        return CreateIssue(ok=True, issue=issue)


class DeleteIssue(graphene.Mutation):
    ok = graphene.Boolean()
    issue = graphene.Field(IssueType, required=False)

    class Arguments:
        issue_id = graphene.Int()

    @graphql_resolver
    def mutate(_, _info, issue_id: int):
        issue = Issue.objects.filter(pk=issue_id).first()

        if issue is None:
            return DeleteIssue(ok=False, issue=None)

        issue.delete()
        return DeleteIssue(ok=True, issue=issue)


class Mutation(graphene.ObjectType):
    create_issue = CreateIssue.Field()
    delete_issue = DeleteIssue.Field()
