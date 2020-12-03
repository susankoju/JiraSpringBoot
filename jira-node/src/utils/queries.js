export const begin = 'BEGIN;';
export const commit = 'COMMIT;';

export const createUsersTable = `
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR UNIQUE NOT NULL
);
`;

export const dropUsersTable = 'DROP TABLE users';

export const createProjectsTable = `
DROP TABLE IF EXISTS projects CASCADE;
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR,
    key VARCHAR UNIQUE,
    type VARCHAR,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    lead_id INT
);
ALTER TABLE "projects" ADD CONSTRAINT "lead" 
    FOREIGN KEY(lead_id)
        REFERENCES users(id)
        ON DELETE SET NULL;
`;

export const insertProjects = `
INSERT INTO projects(name, key, type)
VALUES ('Jira', 'J', 'mock')
`;

export const dropProjectsTable = 'DROP TABLE projects';

export const createProjectMembersTable = `
DROP TABLE IF EXISTS project_members CASCADE;
CREATE TABLE IF NOT EXISTS project_members (
    id SERIAL PRIMARY KEY NOT NULL,
    project_id INT,
    user_id INT
);
ALTER TABLE "project_members" ADD CONSTRAINT "project" 
FOREIGN KEY(project_id)
    REFERENCES projects(id)
    ON DELETE CASCADE;
ALTER TABLE "project_members" ADD CONSTRAINT "user" 
    FOREIGN KEY(user_id)
        REFERENCES users(id)
        ON DELETE CASCADE;
`;

export const dropProjectMembersTable = 'DROP TABLE project_members';
