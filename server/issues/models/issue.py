from django.db import models
from django.utils.translation import gettext_lazy as _
from django_extensions.db.models import TimeStampedModel

from commons.models import AbstractIssue


class Issue(TimeStampedModel, AbstractIssue):
    class IssueTypeChoices(models.TextChoices):
        EPIC = "EPIC", _("Epic")
        TASK = "TASK", _("Task")
        BUG = "BUG", _("Bug")

    type = models.CharField(choices=IssueTypeChoices.choices, default=IssueTypeChoices.TASK.value, max_length=4)
    board = models.ForeignKey("boards.Board", on_delete=models.CASCADE, related_name="issues")
    category = models.ForeignKey(
        "categories.Category",
        default=None,
        null=True,
        blank=True,
        on_delete=models.SET_DEFAULT,
        related_name="categories",
    )

    def __str__(self):
        return f"Issue - {self.type} - {self.title} - {self.assignee} - {self.board} - {self.category}"
