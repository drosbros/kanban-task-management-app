# Generated by Django 4.2.6 on 2023-12-03 20:37

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("issues", "0002_alter_issue_board_alter_issue_category_and_more"),
    ]

    operations = [
        migrations.DeleteModel(
            name="SubIssue",
        ),
    ]
