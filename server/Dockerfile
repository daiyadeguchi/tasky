FROM postgres:latest

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=tasky-db

ADD db/schema.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
