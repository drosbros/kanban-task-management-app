from django.db import models
from django_extensions.db.models import TimeStampedModel


class Board(TimeStampedModel, models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return f"Board - {self.name}"
