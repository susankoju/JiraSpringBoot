--SELECT 'CREATE DATABASE jira-sb'
--WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'jira-sb');
--
--CREATE DATABASE "jira-sb";
--
--SELECT 'jira-sb';

--DROP TABLE IF EXISTS "user";

CREATE TABLE IF NOT EXISTS "user"(
  "id" SERIAL PRIMARY KEY,
  "firstName" varchar(45) NOT NULL,
  "lastName" varchar(45) NOT NULL,
  "email" varchar(100) DEFAULT NULL,
  "password" varchar(45) DEFAULT NULL,
  "profileImage" varchar(100) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS "project"(
  "id" SERIAL PRIMARY KEY,
  "name" varchar(45) NOT NULL,
  "type" varchar(45) NOT NULL,
  "key" varchar(100) DEFAULT NULL,
  "lead" int,
  FOREIGN KEY ("lead") REFERENCES "user",
  "createdAt" varchar(45) DEFAULT NULL,
  "updatedAt" varchar(100) DEFAULT NULL
);

--CREATE TABLE IF NOT EXISTS "task"(
--  "id" SERIAL PRIMARY KEY,
--  "title" varchar(45) NOT NULL,
--  "description" varchar(500),
--  "status" varchar(30) DEFAULT "TODO",
--  "label" varchar(50),
--  "storyPoint" int,
--  "attachment" varchar(100) DEFAULT NULL,
--  "reporter" int,
--  "assignee" int,
--  "project" int,
--  FOREIGN KEY ("reporter") REFERENCES "user",
--  FOREIGN KEY ("assignee") REFERENCES "user",
--  FOREIGN KEY ("project_id") REFERENCES "project",
--  "createdAt" varchar(45) DEFAULT NULL,
--  "updatedAt" varchar(100) DEFAULT NULL
--);

CREATE TABLE IF NOT EXISTS "team"(
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "project_id" int,
  FOREIGN KEY ("user_id") REFERENCES "user",
  FOREIGN KEY ("project_id") REFERENCES "project"
);
