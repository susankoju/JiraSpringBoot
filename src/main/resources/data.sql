INSERT INTO "user" ("id", "firstName", "lastName", "email", "password") VALUES ('1', 'Salman', 'Salman', 'user@example.com', 'password') ON CONFLICT ("id") DO NOTHING;
INSERT INTO "user" ("id", "firstName", "lastName") VALUES ('2', 'SRK', 'Salman') ON CONFLICT ("id") DO NOTHING;
INSERT INTO "user" ("id", "firstName", "lastName") VALUES ('3', 'AMIR', 'Salman') ON CONFLICT ("id") DO NOTHING;
INSERT INTO "user" ("id", "firstName", "lastName") VALUES ('4', 'Tiger', 'Salman') ON CONFLICT ("id") DO NOTHING;
INSERT INTO "user" ("id", "firstName", "lastName") VALUES ('5', 'Prabhas', 'Salman') ON CONFLICT ("id") DO NOTHING;