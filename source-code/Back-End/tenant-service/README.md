# Tenant Service for SaaS LMS

The `tenant-service` feature is a core part of the SaaS Learning Management System (LMS). It provides functionality to handle tenant operations, such as tenant creation, updating, and validation, all within a multi-tenant architecture. The service includes robust error handling and validation using `Prisma ORM` and `Joi` for data validation.

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
│   │   └── index.ts            # Controllers for tenant management
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
│   │   └── index.ts            # Service layer for tenant business logic
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

## Key Features

- **Multi-Tenant Architecture**: Supports multi-tenancy using a single shared database. Each tenant is identified via a tenant ID in the database schema.
- **Validation**: Implements `Joi` for request validation. Tenant data is validated both during creation and updating.
- **Error Handling**: Centralized error handling with custom `HttpError` class and Prisma error processing (`P2002`, `P2003`, etc.).
- **Database Management**: Uses Prisma ORM for database operations with migrations under `src/data/prisma/migrations/`.

## Getting Started

### Prerequisites

- **Node.js** (>= v14.x)
- **Prisma** (>= 4.x)
- **PostgreSQL** (for database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/musabsamani/E-Learning
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your `.env` file for the required environment variables:

   ```bash
   cp .env.example .env
   ```

### Prisma Setup

1. Generate Prisma client:

   ```bash
   npx prisma generate
   ```

2. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

### Running the Service

- To run the application in development mode:

  ```bash
  npm run dev
  ```

### Validation

The following tenant properties are validated:

- **Required Fields**: `name`
- **Optional Fields**: `email`, `phone`, `address`, `city`, `state`, `postalCode`, `country`, `website`, `subscriptionType`, `subscriptionStatus`, `trialEndDate`, `subscriptionEndDate`.

Validation schemas are implemented in `src/validations/tenantValidationSchemas.ts`.

### Error Handling

Errors are handled using a centralized error-handling utility in `src/utils/handleDatabaseErrors.ts`. It captures Prisma-specific errors and provides user-friendly error messages (e.g., unique constraint violations, foreign key violations).

### Migrations

Prisma migrations are stored in `src/data/prisma/migrations/`. Migration files define the database schema changes over time.

### Contributing

1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push the branch and create a pull request.
