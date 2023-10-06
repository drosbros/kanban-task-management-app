from django.db import models
from django_extensions.db.models import TimeStampedModel

from accounts.models import User


class Issue(TimeStampedModel, models.Model):
    class IssueType(models.TextChoices):
        EPIC = ("EPIC", "Epic")
        TASK = ("TASK", "Task")
        BUG = ("BUG", "Bug")
        SUBTASK = ("SUBTASK", "Sub-task")

    type = models.CharField(choices=IssueType.choices, default=IssueType.TASK, max_length=10)
    title = models.CharField(max_length=256, default="", blank=True)
    description = models.TextField(default="", blank=True)
    assignee = models.ForeignKey(User, default=None, null=True, on_delete=models.SET_DEFAULT)
