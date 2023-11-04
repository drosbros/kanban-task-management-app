from django.db import models
from django_extensions.db.models import TimeStampedModel

from accounts.models import User


class Board(TimeStampedModel, models.Model):
    name = models.CharField(max_length=64)

    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="created_boards")

    def __str__(self):
        return f"Board - {self.name} - {self.creator}"
