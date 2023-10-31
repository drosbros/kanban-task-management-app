import graphene
from graphene_django import DjangoObjectType


class GrapheneObjectType(DjangoObjectType):
    id = graphene.Int(source="pk")

    class Meta:
        abstract = True
