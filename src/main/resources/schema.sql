--SELECT 'CREATE DATABASE jira-sb'
--WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'jira-sb');
--
--CREATE DATABASE "jira-sb";
--
--SELECT 'jira-sb';

DROP TABLE IF EXISTS "user";

CREATE TABLE "user"(
  "id" SERIAL PRIMARY KEY,
  "firstName" varchar(45) NOT NULL,
  "lastName" varchar(45) NOT NULL,
  "email" varchar(100) DEFAULT NULL,
  "password" varchar(45) DEFAULT NULL
);
