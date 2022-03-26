# Pull oficial base image
FROM python:3.9.7-alpine
MAINTAINER MaksimMarynau


# Set env variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


# Set work directory
RUN mkdir /usr/src/rr_app
WORKDIR /usr/src/rr_app


# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev


# Instal dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt


# Copy project from local machine to folder in the image
COPY ./rr_project /usr/src/rr_app


# Set privileges entrypoint.sh
RUN sed -i "s/\r$//g" /usr/src/rr_app/entrypoint.sh
RUN chmod +x /usr/src/rr_app/entrypoint.sh


RUN adduser -D user
USER user


# run entrypoint.sh
ENTRYPOINT ["/usr/src/rr_app/entrypoint.sh"]
