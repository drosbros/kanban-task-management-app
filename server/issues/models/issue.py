from django.db import models
from django.utils.translation import gettext_lazy as _
from django_extensions.db.models import TimeStampedModel

from accounts.models import User
from boards.models import Board
from categories.models import Category


class Issue(TimeStampedModel, models.Model):
    class IssueTypeChoices(models.TextChoices):
        EPIC = "EPIC", _("Epic")
        TASK = "TASK", _("Task")
        BUG = "BUG", _("Bug")

    type = models.CharField(choices=IssueTypeChoices.choices, default=IssueTypeChoices.TASK.value, max_length=4)
    title = models.CharField(max_length=256, default="", blank=True)
    description = models.TextField(default="", blank=True)
    assignee = models.ForeignKey(
        User, default=None, null=True, on_delete=models.SET_DEFAULT, related_name="assigned_issues"
    )

    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name="issues")
    category = models.ForeignKey(
        Category, default=None, null=True, on_delete=models.SET_DEFAULT, related_name="categories"
    )
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="created_issues")

    def __str__(self):
        return f"Issue - {self.type} - {self.title} - {self.assignee} - {self.board}"
