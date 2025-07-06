#!/bin/bash

# Create the database
createdb nethost

# Create the user if it doesn't exist
psql -d nethost -c "DO
\$do\$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE  rolname = 'postgres') THEN
      CREATE ROLE postgres LOGIN PASSWORD 'postgres';
   END IF;
END
\$do\$;"

# Grant privileges
psql -d nethost -c "GRANT ALL PRIVILEGES ON DATABASE nethost TO postgres;"

echo "PostgreSQL database setup completed" 