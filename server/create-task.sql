CREATE TABLE tasks (
    id UUID PRIMARY KEY NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL,
    duration_days INT NOT NULL,
    deadline DATE GENERATED ALWAYS AS (created_at + duration_days * interval '1 day') STORED
);
