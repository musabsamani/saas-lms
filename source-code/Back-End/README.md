# Back-End for LMS SaaS Microservices

## Overview

This project serves as the backend for a Learning Management System (LMS) using a microservices architecture. It includes multiple services that handle different functionalities of the LMS, and they are:

- API Gateway.
- Identity and Access Management
- Tenant Management and Organization Management
- Learning and Assessment Management
- Communication and Notification.

## Key Features

- Microservices architecture for modularity and scalability
- Uses Prisma for ORM and database management
- Built with Node.js, Express, and TypeScript for robust and maintainable code
- JWT-based authentication and authorization
- Centralized logging and error handling

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

#### 2. Navigate to the Project Directory

```bash
cd E-Learning/source-code/Back-End
```

#### 3. Install Dependencies for All Services

```bash
npm run install:all
```

#### 4. Set Up Environment Variables

Create a `.env` file in each service directory (`services/*`) with the necessary configurations. Refer to `.env.example` in each service for the required variables.

```bash
cp services/api_gateway/.env.example services/api_gateway/.env
```

#### 5. Set Up the Database

Ensure that your PostgreSQL database is running and accessible. Update the `DATABASE_URL` in each service's `.env` file accordingly.

#### 6. Run Database Migrations for All Services

```bash
npm run prisma:all
```

## Running the Application

### Production Mode (Build and Start All Services)

1. **Build All Services:**

    ```bash
    npm run build:all
    ```

2. **Start All Services:**

    ```bash
    npm run start:all
    ```

### Accessing the Services

Each service will be available at its specified port. Replace `PORT` with the port number defined in the `.env` file of each service.

```bash
http://localhost:PORT
```

## Available Scripts

- **Install Dependencies for All Services:**

  ```bash
  npm run install:all
  ```

  Installs all dependencies for every service in the `services/*` directory.

- **Build All Services:**

  ```bash
  npm run build:all
  ```

  Compiles TypeScript files to JavaScript for all services.

- **Start All Services (Development Mode):**

  ```bash
  npm run start:all
  ```

  Runs all services in development mode with Nodemon for live reloading.

- **Run Prisma Migrations for All Services:**

  ```bash
  npm run prisma:all
  ```

  Applies Prisma migrations to all services' databases.

- **Launch Prisma Studio (API Gateway):**

  ```bash
  npm run prisma:studio
  ```

  Opens Prisma Studio for the API Gateway to interact with the database.

- **Run Unit and Integration Tests:**

  ```bash
  npm test
  ```

  Placeholder script for running tests.

## Technologies Used In The Back-End

- **Node.js and Express**: For building RESTful APIs.
- **TypeScript**: Provides static typing for better code quality.
- **Prisma**: ORM for database interactions.
- **PostgreSQL**: Relational database for storing persistent data.
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

<!-- - **Deployment Instructions**: If there are special steps to deploy to a cloud provider or Docker.
- **API Documentation**: Include detailed API documentation using tools like Swagger or a Postman collection.
- **FAQs**: Address common questions or issues. -->

## Folder Structure

The project follows a monorepo structure managed with npm workspaces:

```text
E-Learning/
│
├── source-code/
│   └── Back-End/
│       ├── services/
│       │   ├── api_gateway/
│       │   ├── identity_and_access_management/
│       │   ├── tenant_and_organization_management/
│       │   ├── learning_and_assessment_management/
│       │   └── communication_and_notification/
│       ├── package.json
│       ├── .gitignore
│       ├── .env.example
│       ├── .docker-compose.yml
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

This project is licensed under the **ISC License**.

## Contact

For questions or support, please contact:

- **Email**: [musab0124887085@gmail.com](mailto:musab0124887085@gmail.com)
- **GitHub Issues**: [GitHub Issues Page](https://github.com/musabsamani/E-Learning/issues)
