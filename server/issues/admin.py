from django.contrib import admin

from .models import Issue
from .models import SubIssue

admin.site.register(Issue)
admin.site.register(SubIssue)
