# JiraSpringBoot
7th Sem. Project JiraSpringBoot(Jira-SB)
##

## Build Tool
- Gradle

## language
- Java
    - JDK 8
    - Spring boot 2.3.4

## Dependencies
- Lombok
- Spring Data JPA
- Spring Web
- PostgreSQL Driver


--------------------------------------------------------------------------------------
# Frontend (React)
https://github.com/punyabz8/JIRA-React

--------------------------------------------------------------------------------------
# Project Scope
<center>

|   S.N.    |   Feature                             |   Status  |
|-----------|---------------------------------------|-----------|
|   1.      | Authentication                        |   TODO    |
|   2.      | Easy to understand project structure  |   TODO    |
|   3.      | Simple drag and drop kanban board     |   TODO    |
|   4.      | Add/update issue                      |   TODO    |
|   5.      | Search/filtering issues               |   TODO    |
|   6.      | Add comments                          |   TODO    |
|   7.      | Upload images                         |   TODO    |

</center>

--------------------------------------------------------------------------------------

# Current Database Schema (To be updated)

--------------------------------------------------------------------------------------
                                      Table "public.user"
|    Column     |          Type          | Collation | Nullable |             Default             
|---------------|------------------------|-----------|----------|----------------------------------|
| id            | integer                |           | not null | nextval('user_id_seq'::regclass) |
| firstName     | character varying(45)  |           | not null | 
| lastName      | character varying(45)  |           | not null | 
| email         | character varying(100) |           |          | NULL::character varying
| password      | character varying(45)  |           |          | NULL::character varying
| profile_image | character varying(255) |           |          | 

--------------------------------------------------------------------------------------

                          Table "public.project"
   Column   |            Type             | Collation | Nullable | Default 
------------|-----------------------------|-----------|----------|---------
 id         | integer                     |           | not null | 
 created_at | timestamp without time zone |           |          | 
 key        | character varying(255)      |           |          | 
 name       | character varying(255)      |           |          | 
 type       | character varying(255)      |           |          | 
 updated_at | timestamp without time zone |           |          | 
 lead_id    | integer                     |           |          | 

--------------------------------------------------------------------------------------

                          Table "public.task"
   Column    |          Type          | Collation | Nullable | Default 
-------------|------------------------|-----------|----------|---------
 id          | integer                |           | not null | 
 attachment  | character varying(255) |           |          | 
 description | character varying(255) |           |          | 
 label       | character varying(255) |           |          | 
 status      | character varying(255) |           |          | 
 story_point | integer                |           |          | 
 title       | character varying(255) |           |          | 
 assignee_id | integer                |           |          | 
 reporter_id | integer                |           |          | 
 project_id  | integer                |           |          | 

--------------------------------------------------------------------------------------

                  Table "public.team"
   Column   |  Type   | Collation | Nullable | Default 
------------|---------|-----------|----------|---------
 id         | integer |           | not null | 
 project_id | integer |           |          | 
 user_id    | integer |           |          | 

--------------------------------------------------------------------------------------

                          Table "public.comment"
   Column   |            Type             | Collation | Nullable | Default 
------------|-----------------------------|-----------|----------|---------
 id         | integer                     |           | not null | 
 created_at | timestamp without time zone |           |          | 
 posted_by  | bytea                       |           |          | 
 issue_id    | bytea                       |           |          | 
 text       | character varying(255)      |           |          | 
 updated_at | timestamp without time zone |           |          | 

--------------------------------------------------------------------------------------
