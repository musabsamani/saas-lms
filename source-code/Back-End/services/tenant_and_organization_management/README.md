# Tenant and Organization Management Service

## Overview

The `tenant_and_organization_management` Service is a core component of the SaaS Learning Management System (LMS). It is responsible for handling all aspects related to tenant (organization) management within the platform. This includes the creation, configuration, and subscription management of tenants, as well as managing organizational structures such as divisions and hierarchical relationships within each tenant. By providing robust tenant management capabilities, the service ensures that each organization can efficiently manage their learning environment, tailor configurations to their specific needs, and maintain clear separations between different organizational units.

## Key Features

- **Tenant Creation and Onboarding**: Facilitates the creation of new tenants (organizations), including initial setup and configuration based on selected subscription plans.

- **Subscription Management**: Manages tenant subscriptions, including plan upgrades, renewals, billing, and usage tracking.

- **Organization Structure Management**: Handles the creation and management of divisions and hierarchical structures within each tenant, enabling organizations to mirror their internal structures.

## Getting Started

### Prerequisites

- **Node.js** (>= v14.x)
- **Prisma** (>= 4.x)
- **PostgreSQL** (for the database)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/musabsamani/E-Learning.git
```

#### 2. Navigate to the Tenant Management Service Directory

```bash
cd source-code/Back-End/services/tenant_and_organization_management
```

#### 3. Install Dependencies

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

First, build the service and then start it:

```bash
npm run build
npm start
```

### Accessing the Service

The service will be available at:

```bash
http://localhost:<PORT>
```

Replace `<PORT>` with the port number specified in your `.env` file.

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
- **JWT**: For secure authentication and authorization.
- **Winston**: Logging library for tracking errors and events.
- **Jest**: Testing framework for unit and integration tests.

## API Endpoints

Here are some of the key API endpoints provided by the service:

### Tenant Management

- **Create Tenant**

  ```text
  POST /tenants
  ```

  Creates a new tenant.

- **Get Tenant Details**

  ```text
  GET /tenants/:tenantId
  ```

  Retrieves details of a specific tenant.

- **Update Tenant**

  ```text
  PUT /tenants/:tenantId
  ```

  Updates information of an existing tenant.

- **Delete Tenant**

  ```text
  DELETE /tenants/:tenantId
  ```

  Deletes a tenant.

### Subscription Management

- **Create Subscription**

  ```text
  POST /subscriptions
  ```

  Creates a new subscription for a tenant.

- **Get Subscription Details**

  ```text
  GET /subscriptions/:subscriptionId
  ```

  Retrieves details of a specific subscription.

- **Update Subscription**

  ```text
  PUT /subscriptions/:subscriptionId
  ```

  Updates an existing subscription.

- **Cancel Subscription**

  ```text
  DELETE /subscriptions/:subscriptionId
  ```

  Cancels a subscription.

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

## Environment Variables

The service uses the following environment variables:

- **Current Service**
  - `CURRENT_SERVICE_NAME`: Name of the current service.
  - `CURRENT_SERVICE_PORT`: The port on which the current service runs (auto generated based on `CURRENT_SERVICE_NAME` and the specefic service port).

- **JWT**
  - `JWT_SECRET`: Secret key for JWT authentication.

- **Service Ports**
  - `API_GATEWAY_PORT`: The port on which the API Gateway runs.
  - `TENANT_AND_ORGANIZATION_MANAGEMENT_SERVICE_PORT`: The port on which the Tenant and Organization Management Service runs.
  - `IDENTITY_AND_ACCESS_MANAGEMENT_SERVICE_PORT`: The port on which the Identity and Access Management Service runs.
  - `COMMUNICATION_AND_NOTIFICATION_SERVICE_PORT`: The port on which the Communication and Notification Service runs.
  - `LEARNING_AND_ASSESSMENT_MANAGEMENT_SERVICE_PORT`: The port on which the Learning and Assessment Management Service runs.

- **API URLs**
  - `BASE_API_URL`: The base URL for the API (e.g., `http://localhost`).
  - `API_GATEWAY_URL`: URL for the API Gateway (`${BASE_API_URL}:${API_GATEWAY_PORT}`).
  - NOTE: Other service is like the `API_GATEWAY` their URLs are automatically generated based on the `BASE_API_URL`

- **Database**
  - `DATABASE_USER`: Username for the PostgreSQL database.
  - `DATABASE_PASSWORD`: Password for the PostgreSQL database.
  - `DATABASE_HOST`: Host for the PostgreSQL database.
  - `DATABASE_PORT`: Port for the PostgreSQL database.
  - `DATABASE_NAME`: Name of the PostgreSQL database.
  - `DATABASE_URL`: Connection string for PostgreSQL (auto generated from previously defined variables).

## Folder Structure

```text
tenant_and_organization_management/
├── src/
│   ├── controllers/        # Handles request logic
│   ├── routes/             # API route definitions
│   ├── models/             # Database models with Prisma
│   ├── services/           # Business logic and service layer
│   ├── middlewares/        # Authentication and other middleware
│   ├── utils/              # Utility functions and helpers
│   ├── config/             # Configuration files
│   └── index.ts            # Entry point of the application
├── tests/                  # Unit and integration tests
├── prisma/
│   ├── schema.prisma       # Prisma schema definition
│   └── migrations/         # Database migrations
├── .env                    # Environment variables (should not be committed)
├── .env.example            # Example environment variables file
├── .gitignore              # Specifies intentionally untracked files
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # This README file
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
