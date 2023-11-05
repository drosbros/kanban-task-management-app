from django.db import models
from django_extensions.db.models import TimeStampedModel

from accounts.models import User
from issues.models.issue import Issue


class SubIssue(TimeStampedModel, models.Model):
    parent_issue = models.ForeignKey(Issue, on_delete=models.CASCADE, related_name="subissues")
    title = models.CharField(max_length=256, default="", blank=True)
    description = models.TextField(default="", blank=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="created_subissues")
