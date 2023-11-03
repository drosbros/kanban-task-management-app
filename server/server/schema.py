import graphene
import graphql_jwt

import accounts.graphql.mutations as accounts_mutations
import accounts.graphql.queries as accounts_queries
import issues.graphql.mutations as issues_mutations
import issues.graphql.queries as issues_queries


class Query(accounts_queries.Query, issues_queries.Query, graphene.ObjectType):
    pass


class Mutation(accounts_mutations.Mutation, issues_mutations.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
