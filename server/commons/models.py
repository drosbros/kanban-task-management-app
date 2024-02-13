from django.db import models


class AbstractIssue(models.Model):
    title = models.CharField(max_length=256, default="", blank=True)
    description = models.TextField(default="", blank=True)

    assignee = models.ForeignKey(
        "accounts.User",
        default=None,
        null=True,
        blank=True,
        on_delete=models.SET_DEFAULT,
        related_name="assigned_%(class)ss",
    )
    creator = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="created_%(class)ss")

    class Meta:
        abstract = True
