# API Gateway for LMS SaaS Microservices

## Overview

This is the API Gateway service for the LMS SaaS application, responsible for routing requests between various microservices, including Tenant, User, and Authentication services.The gateway acts as a centralized entry point, handling routing, authentication, and request forwarding between microservices.

## Features

- Request Forwarding: Forwards requests to the appropriate microservices(e.g., Tenant, User, Authentication) based on URL path.
- JWT Authentication: Implements middleware for verifying JSON Web Tokens to secure API routes.
- Error Handling: Handles undefined endpoints and any other errors through custom error middleware.
- Environment - Based Configuration: Uses `.env` for configuring service URLs, ports, and secrets dynamically.
- Logging and Monitoring: Logs requests and errors using Winston, providing easy monitoring and debugging.
- Production Optimizations: Uses Helmet for improved security and Compression for optimizing performance.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/musabsamani/E-Learning.git
```

### 2. Navigate to the API Gateway directory

```bash
cd source-code/Back-End/api-gateway
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up environment variables

Create a `.env` file in the root directory with the following content:

```bash
# JWT key
JWT_SECRET=your_jwt_secret

# Service ports
API_GATEWAY_PORT=5000
TENANT_SERVICE_PORT=5001
USER_SERVICE_PORT=5002
AUTHENTICATION_SERVICE_PORT=5003

# API URLs
BASE_API_URL="http://localhost"
API_GATEWAY_URL="${BASE_API_URL}:${API_GATEWAY_PORT}"
TENANT_SERVICE_URL="${BASE_API_URL}:${TENANT_SERVICE_PORT}"
USER_SERVICE_URL="${BASE_API_URL}:${USER_SERVICE_PORT}"
AUTHENTICATION_SERVICE_URL="${BASE_API_URL}:${AUTHENTICATION_SERVICE_PORT}"

# Database
DATABASE_USER=your_postgres_user
DATABASE_PASSWORD=your_postgres_password
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=your_database_name
DATABASE_URL="postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?schema=public"
```

## Running the Application

### 1. Start the API Gateway

```bash
npm start
```

### 2. Access the API Gateway

```bash
http://localhost:5000
```

## Available Scripts

- `npm run start`: Runs the API Gateway with Nodemon for development.

- `npm run build`: Compiles the TypeScript files.
- `npm run prisma:migrate`: Executes Prisma migrations to reflect database schema changes.
- `npm run prisma:generate`: Generates the Prisma client.
- `npm run prisma:studio`: Launches Prisma Studio for managing the PostgreSQL database.

## Technologies Used

- Node.js and Express: For handling HTTP requests and responses.
- typescript: For type checking.
- Prisma: ORM used for managing PostgreSQL databases and migrations.
- JWT(JSON Web Token): Used for secure authentication.
- Winston: Logging library for tracking errors and logging information.

## Folder Structure

```text
api-gateway/
├── src/
│ ├── controllers/ # Logic for forwarding requests to microservices
│ ├── data/ # Prisma schema and migrations
│ ├── errors/ # Custom error handling classes
│ ├── middlewares/ # Authentication and error handling middlewares
│ ├── router/ # API routes for forwarding to microservices
│ ├── startup/ # Initialization scripts for database, logging, routes, and production configs
│ └── utils/ # Utility functions (e.g., JWT token generation)
├── tests/ # Unit and integration tests for the API Gateway
├── .env # Environment variables for the API Gateway and microservices
├── .gitignore # Files to be ignored by git
├── package.json # Project metadata and dependencies
├── tsconfig.json # TypeScript configuration
└── README.md # This README file
```

## License

```text
This project is licensed under the ISC License.
```
