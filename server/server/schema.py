import graphene

import accounts.graphql.mutations as accounts_mutations
import accounts.graphql.queries as accounts_queries
import issues.graphql.mutations as issues_mutations
import issues.graphql.queries as issues_queries


class Query(accounts_queries.Query, issues_queries.Query, graphene.ObjectType):
    pass


class Mutation(accounts_mutations.Mutation, issues_mutations.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
