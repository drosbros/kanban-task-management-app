# Generated by Django 4.2.4 on 2023-10-06 16:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Issue",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                (
                    "created",
                    django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name="created"),
                ),
                (
                    "modified",
                    django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name="modified"),
                ),
                (
                    "type",
                    models.CharField(
                        choices=[("EPIC", "Epic"), ("TASK", "Task"), ("BUG", "Bug"), ("SUBTASK", "Sub-task")],
                        default="TASK",
                        max_length=10,
                    ),
                ),
                ("title", models.CharField(blank=True, default="", max_length=256)),
                ("description", models.TextField(blank=True, default="")),
                (
                    "assignee",
                    models.ForeignKey(
                        default=None,
                        null=True,
                        on_delete=django.db.models.deletion.SET_DEFAULT,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "get_latest_by": "modified",
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="SubIssue",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                (
                    "created",
                    django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name="created"),
                ),
                (
                    "modified",
                    django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name="modified"),
                ),
                ("title", models.CharField(blank=True, default="", max_length=256)),
                ("description", models.TextField(blank=True, default="")),
                ("parent_issue", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to="issues.issue")),
            ],
            options={
                "get_latest_by": "modified",
                "abstract": False,
            },
        ),
    ]
