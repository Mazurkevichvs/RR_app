# Pull oficial base image
FROM python:3.9.7-alpine
MAINTAINER MaksimMarynau


# Set env variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


# Instal dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt


# Set work directory
RUN mkdir /usr/src/rr_app
WORKDIR /usr/src/rr_app


# Copy project from local machine to folder in the image
COPY ./rr_project /usr/src/rr_app


RUN adduser -D user
USER user
