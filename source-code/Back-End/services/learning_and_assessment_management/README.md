# Communication and notification Service for LMS Microservices

## Overview

The `communication_and_notification` Service is a core component of the SaaS Learning Management System (LMS). It handles all aspects of communication within the platform, including notifications, messaging, calendar events, and scheduling. This service ensures that users stay informed and engaged by providing timely updates and facilitating interactions between users.

## Key Features

- **Noifications Management**: Sends system-generated notifications to users about course updates, assessments, deadlines, and other important events.
- **Messaging System**: Enables direct messaging between users, supporting both individual and group conversations.
- **Calendar Events**: Manages calendar functionalities, allowing users to create, update, and view events.
- **Event Scheduling**: Handles the scheduling of events, including invitations and attendee management.
<!-- - **Real-Time Updates**: Utilizes WebSockets or similar technologies to deliver real-time communication where applicable. -->

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

#### 2. Navigate to the Communication and Notification Service directory

```bash
cd source-code/Back-End/services/communication_and_notification
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

### 2. Start the server

```bash
npm start
```

### 3. Access the server

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

## Project Structure

```text
.
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── getFilesInFolder.js         # Script for file operations
├── getFilesWithContent.js      # Script for content search in files
├── package-lock.json           # Dependencies lock file
├── package.json                # Project metadata and dependencies
├── README.md                   # Project documentation
├── tsconfig.json               # TypeScript configuration
├── .vscode/
│   └── launch.json             # VSCode Debugger configuration
├── src/
│   ├── constants/
│   │   └── index.ts            # Application-wide constants
│   ├── controllers/
│   │   └── index.ts            # Controllers for user management
│   ├── data/
│   │   └── prisma/
│   │       ├── migrations/     # Database migrations with Prisma
│   │       │   └── migration.sql # SQL migration scripts
│   │       └── schema.prisma   # Prisma schema file
│   ├── errors/
│   │   └── httpError.ts        # Custom error handling
│   ├── interfaces/
│   │   └── index.ts            # TypeScript interfaces for tenants
│   ├── middlewares/
│   │   ├── authMiddleware.ts   # Authentication middleware
│   │   ├── errorMiddleware.ts  # Error handling middleware
│   │   ├── handleUndefinedEndpoint.ts # Handle unknown routes
│   │   ├── reqValidate.ts      # Request validation middleware
│   │   ├── validateIdParams.ts # Middleware to validate ID parameters
│   │   └── validateRequestBody.ts # Validate request body schema
│   ├── router/
│   │   └── index.ts            # Application routing
│   ├── services/
│   │   └── index.ts            # Service layer for user business logic
│   ├── startup/
│   │   ├── database.ts         # Database initialization
│   │   ├── logging.ts          # Logging setup
│   │   ├── production.ts       # Production environment setup
│   │   └── routes.ts           # Application routing setup
│   ├── types/
│   │   └── index.ts            # Global types definitions
│   ├── utils/
│   │   ├── handleContollerErrors.ts  # Utility for handling controller errors
│   │   ├── handleDatabaseErrors.ts   # Utility for handling database errors
│   │   └── typesUtilities.ts   # TypeScript utilities for type manipulation
│   ├── validations/
│   │   └── tenantValidationSchemas.ts # Joi validation schemas for tenants
└── .vscode/
    └── launch.json             # VSCode debug config
```
