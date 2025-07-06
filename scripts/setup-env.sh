#!/bin/bash

# Create .env file
cat > .env << EOL
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/nethost?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-change-this-in-production"

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_ID=""
GITHUB_SECRET=""
EOL

echo "Environment variables set up successfully" 