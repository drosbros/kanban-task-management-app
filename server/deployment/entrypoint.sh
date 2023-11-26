#!/bin/sh
poetry run python /app/manage.py makemigrations --no-input
poetry run python /app/manage.py migrate --no-input
poetry run python /app/manage.py runserver 0.0.0.0:8000
