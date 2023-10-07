from django.db import models
from django.utils.translation import gettext_lazy as _
from django_extensions.db.models import TimeStampedModel

from accounts.models import User


class Issue(TimeStampedModel, models.Model):
    class IssueTypeChoices(models.TextChoices):
        EPIC = "EPIC", _("Epic")
        TASK = "TASK", _("Task")
        BUG = "BUG", _("Bug")

    type = models.CharField(choices=IssueTypeChoices.choices, default=IssueTypeChoices.TASK, max_length=10)
    title = models.CharField(max_length=256, default="", blank=True)
    description = models.TextField(default="", blank=True)
    assignee = models.ForeignKey(User, default=None, null=True, on_delete=models.SET_DEFAULT)

    def __str__(self):
        return f"Issue - {self.type} - {self.title} - {self.assignee}"
