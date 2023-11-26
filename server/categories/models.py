from accounts.models import User
from boards.models import Board
from django.db import models
from django_extensions.db.models import TimeStampedModel


class Category(TimeStampedModel, models.Model):
    class Meta:
        verbose_name_plural = "categories"

    name = models.CharField(max_length=64)
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name="categories")

    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="created_categories")

    def __str__(self):
        return f"Category - {self.name} - {self.board}"
