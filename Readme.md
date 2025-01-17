#SQL Script

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,  -- Auto-incrementing primary key
  name VARCHAR(255) NOT NULL,  -- Company name (required field)
  built_date DATE NOT NULL,  -- Built date (required field)
  ceo VARCHAR(255) NOT NULL  -- CEO name (required field)
);

CREATE TABLE job (
  id SERIAL PRIMARY KEY,
  department VARCHAR(255) NOT NULL,
  salary NUMERIC(10, 2) NOT NULL
);

CREATE TABLE persons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department VARCHAR(255) NOT NULL
);
