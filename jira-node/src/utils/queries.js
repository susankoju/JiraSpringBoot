export const createProjectsTable = `
DROP TABLE IF EXISTS projects;
CREATE TABLE IF NOT EXISTS projects (
    id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR,
    key VARCHAR UNIQUE,
    type VARCHAR,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    lead_id INT
)
`;

export const insertProjects = `
INSERT INTO projects(name, key, type)
VALUES ('Jira', 'J', 'mock')
`;

export const dropProjectsTable = 'DROP TABLE projects';
