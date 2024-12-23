# Communication and notification Service for LMS Microservices

## Overview

The `communication_and_notification` Service is a core component of the SaaS Learning Management System (LMS). It handles all aspects of communication within the platform, including notifications, messaging, calendar events, and scheduling. This service ensures that users stay informed and engaged by providing timely updates and facilitating interactions between users.

## Key Features

- **Noifications Management**: Sends system-generated notifications to users about course updates, assessments, deadlines, and other important events.

- **Messaging Management**: Facilitates direct messaging between users, allowing users to send messages to each other.

- **Calendar Events**: Manages calendar functionalities, allowing users to create, update, and view events.

- **Event Scheduling**: Handles the scheduling of events, including invitations and attendee management.

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

#### 4. Set Up Environment Variables

Create a `.env` file in the root directory with the necessary configurations. Refer to `.env.example` for required variables.

```bash
cp .env.example .env
```

#### 5. Set Up the Database

Ensure that your PostgreSQL database is running and accessible. Update the `DATABASE_URL` in your `.env` file accordingly.

#### 6. Run Database Migrations

```bash
npm run prisma:deploy
```

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

### 3. Access the server

```bash
http://localhost:[service_port_here]
```

### Accessing the Service

The service will be available at:

```bash
http://localhost:PORT
```

Replace `PORT` with the port number specified in your `.env` file.

## Available Scripts

- `npm run dev`: Runs the service in development mode with Nodemon for live reloading.
- `npm run start`: Runs the service in production mode.
- `npm run build`: Compiles TypeScript files to JavaScript.
- `npm run prisma:deploy`: Runs Prisma and applying migrations to production databases.
- `npm run prisma:migrate`: Runs Prisma migrations to update the database schema.
- `npm run prisma:generate`: Generates Prisma client based on the schema.
- `npm run prisma:studio`: Launches Prisma Studio to interact with the database.
- `npm test`: Runs unit and integration tests.

## Technologies Used

- **Node.js and Express**: For building the RESTful API.
- **TypeScript**: Provides static typing for better code quality.
- **Prisma**: ORM for database interactions.
- **PostgreSQL**: Relational database for storing persistent data.
<!-- - **Redis**: In-memory data store for caching and rate limiting. -->
- **JWT**: For secure authentication and authorization.
- **Winston**: Logging library for tracking errors and events.
- **Jest**: Testing framework for unit and integration tests.

## API Endpoints

Here are some of the key API endpoints provided by the service:

### Organization Structure

- **Create Division Type**

  ```text
  POST /divisions/types
  ```

  Creates a new division type.

- **Get Division Types**

  ```text
  GET /divisions/types
  ```

  Retrieves all division types.

- **Create Division**

  ```text
  POST /divisions
  ```

  Creates a new division within a tenant.

- **Get Divisions**

  ```text
  GET /divisions?tenantId=...
  ```

  Retrieves divisions for a specific tenant.

- **Update Division**

  ```text
  PUT /divisions/:divisionId
  ```

  Updates an existing division.

- **Delete Division**

  ```text
  DELETE /divisions/:divisionId
  ```

  Deletes a division.

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

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m 'Add new feature'
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

## Testing

Run the tests using the following command:

```bash
npm test
```

Ensure all new features are covered by unit and integration tests.

## License

This project is licensed under the **MIT License**.

## Contact

For questions or support, please contact:

- **Email**: [musab0124887085@gmail.com](mailto:musab0124887085@gmail.com)
- **GitHub Issues**: [GitHub Issues Page](https://github.com/musabsamani/E-Learning/issues)
