from typing import Callable

from graphql_jwt.decorators import login_required


def graphql_resolver(func: Callable):
    return staticmethod(login_required(func))
