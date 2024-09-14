# API Gateway for LMS Microservices

## Overview

This is the `api_gateway` service for the LMS SaaS application, responsible for routing requests between various microservices, including Tenant, User, and Authentication services.The gateway acts as a centralized entry point, handling routing, authentication, and request forwarding between microservices.

## Key Features

- **Request Forwarding**: Forwards requests to the appropriate microservices(e.g., `identity_and_access_management`, `communication_and_notification`, `learning_and_assessment_management`, etc.) based on URL path.
- **JWT Authentication**: Implements middleware for verifying JSON Web Tokens to secure API routes.
- **Error Handling**: Handles undefined endpoints and any other errors through custom error middleware.
- **Logging and Monitoring**: Logs requests and errors using Winston, providing easy monitoring and debugging.
- **Production Optimizations**: Uses Helmet for improved security and Compression for optimizing performance.

## Getting Started

### Prerequisites

- **Node.js** (>= v14.x)
- **Prisma** (>= 4.x)
- **PostgreSQL** (for database)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/musabsamani/E-Learning.git
```

#### 2. Navigate to the API Gateway directory

```bash
cd source-code/Back-End/services/api_gateway
```

#### 3. Install dependencies

```bash
npm install
```

#### 4. Set up environment variables

Create a `.env` file in the root directory with similar content to the file `./.env.example`

## Running the Application

### 1. Prisma Setup

#### 1. Generate Prisma client

```bash
npm run prisma:generate
```

#### Run database migrations

```bash
npm run prisma:migrate
```

### 2. Start the API Gateway

```bash
npm start
```

### 3. Access the API Gateway

```bash
http://localhost:[service_port_here]
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
api_gateway/
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
