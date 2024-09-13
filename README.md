# LMS SaaS Microservices Application

[![wakatime](https://wakatime.com/badge/github/musabsamani/E-Learning.svg)](https://wakatime.com/badge/github/musabsamani/E-Learning)

---

## Overview

This project is a **Learning Management System (LMS)** built using a **microservices architecture** with **React** and **Next.js** for the frontend, **Node.js** and **Express.js** for the backend services **PostgreSQL** for the database with **Prisma** as the ORM, and **TypeScript** for type safety,
The system supports **multitenancy** using a shared database structure with tenant IDs.

The backend is divided into microservices to handle specific features like **user management**, **tenant management**, and **API gateway** for routing and communication between services.

## Features

- **Microservices Architecture**: The system is divided into independent services for scalability and maintainability.
- **Multitenancy**: Supports multiple tenants with tenant-specific data management.
- **RBAC**: Role-Based Access Control for user permissions.
- **Prisma ORM**: Provides database management and query abstraction with PostgreSQL.
- **API Gateway**: Centralized entry point for routing requests between different services.
- **Dockerized Environment**: The application is containerized for easier deployment and scaling.

## Architecture

The system follows a **microservices architecture** with the following services:

- **API Gateway**: Handles all incoming requests and routes them to the appropriate service.
- **Authentication Service**: Manages token-based authentication using JWT.
- **Tenant Service**: Handles tenant management, including subscription and status tracking.
- **User Service**: Manages user registration, authentication, and RBAC.

Each service is connected to a **shared PostgreSQL database** with **Prisma** managing migrations and database schema.

## Services Overview

### 1. API Gateway

- Acts as a central point for communication between frontend and backend services.

### 2. Authentication Service

- Manages authentication logic.
- Issues JWT tokens upon successful login.
- Verifies token authenticity in request headers.
- Routes requests to the appropriate service.
- Handles global error handling and request validation.

### 3. Tenant Service

- Manages tenant-related functionalities, including creating and updating tenant information.
- Validates subscription types and status.
- Ensures proper multitenant data isolation using tenant IDs.

### 4. User Service

- Manages users, roles, and permissions.
- Supports JWT-based authentication.
- Provides endpoints for user management (e.g., registration, login).

## Technologies Used

- **Frontend**: React with Next.js and TypeScript
- **Backend**: Node.js with Express.js, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based authentication and OAuth
- **Containerization**: Docker
- **API Gateway**: Centralized API entry point
- **Multitenancy**: Single database with tenant-based data isolation
- **RBAC**: Role-Based Access Control

## Installation

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/musabsamani/E-Learning.git
   ```

2. Navigate to the project directory:

   ```bash
   cd source-code/Back-End
   ```

3. Install dependencies for each service (api-gateway, tenant-service, user-service):

   ```bash
   cd <service_directory>
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` in each service directory and provide the necessary values.

5. Start the services using Docker Compose:

   ```bash
   docker-compose up
   ```

## Database Setup

- The database schema is managed with Prisma.
- Migrations are located in the `src/data/prisma/migrations` directory of each service.
- To apply migrations:

  ```bash
  npx prisma migrate deploy
  ```

## Running the Application

1. **Start the API Gateway**:
   - Run `npm start` in the **api-gateway** directory.

2. **Start User, Tenant Services, and other services**:
   - Run `npm start` in each service directories.

3. The frontend `React` can be served separately or integrated with the backend.

## Development

### Prisma ORM

- Prisma is used for schema management, migrations, and querying the PostgreSQL database.
- To generate Prisma client after making schema changes:

  ```bash
  npx prisma generate
  ```

### Running Tests

- Unit and integration tests are located in the `tests` folder of each service.
- To run tests:

  ```bash
  npm test
  ```

## Docker

- The project is dockerized for ease of deployment.
- Ensure Docker is installed and running on your machine.
- Use the following command to build and start the containers:

  ```bash
  docker-compose up --build
  ```

## Folder Structure

```
source-code/
│
├── Back-End/
│   ├── api-gateway/
│   ├── tenant-service/
│   ├── user-service/
│   └── docker-compose.yml
│
├── Front-End/
│   └── React-based frontend for the LMS
│
└── README.md
```

## Contribution

Contributions are welcome! Please follow the following guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Submit a pull request with a detailed description of the changes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or issues, please feel free to contact the maintainers at: <musab0124887085@gmail.com>
