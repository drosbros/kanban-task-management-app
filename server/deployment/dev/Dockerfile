ARG PYTHON_VERSION=3.12-slim-bullseye

FROM python:${PYTHON_VERSION}

RUN --mount=type=secret,id=DATABASE_URL \
    MY_SUPER_SECRET="$(cat /run/secrets/MY_SUPER_SECRET)"

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# psycopg2 dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /code

RUN pip install poetry
COPY pyproject.toml poetry.lock /code/
RUN poetry config virtualenvs.create false
RUN poetry install --only main --no-root --no-interaction
COPY ../../ /code

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN poetry run python manage.py collectstatic --noinput
RUN poetry run python /code/manage.py makemigrations --no-input
RUN poetry run python /code/manage.py migrate --no-input

EXPOSE 8000

CMD ["gunicorn", "--bind", ":8000", "--workers", "2", "config.wsgi"]
