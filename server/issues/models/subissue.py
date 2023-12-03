from django.db import models
from django_extensions.db.models import TimeStampedModel

from commons.models import AbstractIssue


class SubIssue(TimeStampedModel, AbstractIssue):
    parent = models.ForeignKey("issues.Issue", related_name="parent_issue", on_delete=models.CASCADE)

    @property
    def board(self):
        return self.parent.board

    @property
    def category(self):
        return self.parent.category
