export const begin = 'BEGIN;';
export const commit = 'COMMIT;';

export const createUsersTable = `

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR UNIQUE NOT NULL
);
`;

export const dropUsersTable = 'DROP TABLE IF EXISTS users CASCADE;';

export const createProjectsTable = `

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR,
    key VARCHAR UNIQUE,
    type VARCHAR,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    lead_id INT
);
`;

export const alterProjectsTable = `
ALTER TABLE "projects" ADD CONSTRAINT "lead" 
    FOREIGN KEY(lead_id)
        REFERENCES users(id)
        ON DELETE SET NULL;
`;

export const insertProjects = `
INSERT INTO projects(name, key, type)
VALUES ('Jira', 'J', 'mock')
`;

export const dropProjectsTable = 'DROP TABLE IF EXISTS projects CASCADE;';

export const createProjectMembersTable = `

CREATE TABLE IF NOT EXISTS project_members (
    id SERIAL PRIMARY KEY NOT NULL,
    project_id INT,
    user_id INT
);
`;

export const alterProjectMemberTable = `
ALTER TABLE "project_members" ADD CONSTRAINT "project" 
FOREIGN KEY(project_id)
    REFERENCES projects(id)
    ON DELETE CASCADE;
ALTER TABLE "project_members" ADD CONSTRAINT "user" 
    FOREIGN KEY(user_id)
        REFERENCES users(id)
        ON DELETE CASCADE;
`;

export const dropProjectMembersTable = 'DROP TABLE IF EXISTS project_members CASCADE;';

export const createBoardsTable = `

CREATE TABLE IF NOT EXISTS boards (
    id SERIAL PRIMARY KEY NOT NULL,
    project_id INT,
    name VARCHAR
);
`;

export const dropSchema = `
drop schema public cascade;
create schema public;
`;

export const createIssuesTable = `
CREATE TABLE IF NOT EXISTS issues (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR,
    type VARCHAR,
    status VARCHAR,
    priority VARCHAR,
    description VARCHAR,
    attachment VARCHAR,
    board_id INT,
    sprint INT,
    story_point INT,
    assignee_id INT,
    reporter_id INT,
    due_date TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)
`;

export const dropIssuesTable = 'DROP TABLE IF EXISTS issues CASCADE';

export const alterIssuesTable = `
ALTER TABLE "issues" ADD CONSTRAINT "reporter"
    FOREIGN KEY(reporter_id)
        REFERENCES users(id);
ALTER TABLE "issues" ADD CONSTRAINT "assignee"
    FOREIGN KEY(assignee_id)
        REFERENCES users(id);
`;

export const alterBoardTable = `
ALTER TABLE "boards" ADD CONSTRAINT "project" 
    FOREIGN KEY(project_id)
        REFERENCES projects(id)
        ON DELETE CASCADE;
`;

export const dropBoardsTable = 'DROP TABLE IF EXISTS boards CASCADE;';
