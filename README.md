# LMS SaaS Microservices Application

[![wakatime](https://wakatime.com/badge/github/musabsamani/E-Learning.svg)](https://wakatime.com/badge/github/musabsamani/E-Learning)

---

## Overview

This project is a **Learning Management System (LMS)** built using a **microservices architecture**. The frontend uses **React** and **Next.js** for a dynamic user interface, while the backend consists of various microservices built with **Node.js** and **Express.js**. **PostgreSQL** is used as the database, managed through **Prisma** ORM, and the system employs **TypeScript** for type safety. The application supports **multitenancy** using a shared database structure with tenant IDs.

The backend is divided into the following microservices:

- **API Gateway**
- **Identity and Access Management**
- **Tenant Management and Organization Management**
- **Learning and Assessment Management**
- **Communication and Notification**

## Features

- **Microservices Architecture**: The system is split into independent services for scalability and maintainability.
- **Multitenancy**: Supports multiple tenants with isolated data management using tenant IDs.
- **RBAC**: Role-Based Access Control for secure user permissions management.
- **API Gateway**: Centralized entry point for routing requests to appropriate services.
- **Prisma ORM**: Manages database schema and migrations with PostgreSQL.
- **Dockerized Environment**: Containerized for easy deployment and scaling.

## Technologies Used

- **Frontend**: React with Next.js, TypeScript
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based authentication and OAuth
- **Containerization**: Docker for isolated environment setup
- **API Gateway**: Centralized API entry point
- **RBAC**: Role-Based Access Control for managing user permissions

## Installation

### Prerequisites

- **Node.js** (>= v14.x)
- **Prisma** (>= 4.x)
- **PostgreSQL** (for the database)
- **Docker** (for containerized deployment)

### 1. Clone the Repository

```bash
git clone https://github.com/musabsamani/E-Learning.git
```

### 2. Navigate to the Project Directory

```bash
cd E-Learning/source-code/Back-End
```

### 3. Install Dependencies

Install the dependencies for all backend services:

```bash
npm run install:all
```

### 4. Set Up Environment Variables

Create a `.env` file in each service directory and provide the necessary values. You can use `.env.example` as a reference.

```bash
cp services/api_gateway/.env.example services/api_gateway/.env
```

### 5. Set Up the Database

Ensure your PostgreSQL database is running and accessible. Update the `DATABASE_URL` in each service's `.env` file to reflect your database configuration.

### 6. Run Database Migrations

Apply the Prisma migrations to set up the database schema:

```bash
npm run prisma:all
```

### 7. Running the Application

To start all services in development mode:

```bash
npm run start:all
```

## Development

### Prisma ORM

- Prisma is used to manage the database schema and run queries.
- To generate the Prisma client after modifying the schema:

  ```bash
  npx prisma generate
  ```

### Running the Frontend

The frontend of the LMS is built with React and Next.js and can be served separately. Navigate to the frontend directory to install dependencies and run the application:

```bash
cd source-code/Front-End
npm install
npm run dev
```

## Running the Application

### Accessing Services

The services are accessible at the ports specified in their `.env` files. The API Gateway will route requests to the appropriate microservices.

### Docker

The application is fully containerized for easier deployment. To build and run the containers, ensure Docker is installed and running on your machine, then execute:

```bash
docker-compose up --build
```

## Folder Structure

```text
source-code/
│
├── Back-End/
│   ├── api-gateway/
│   ├── tenant-service/
│   ├── user-service/
│   ├── identity_and_access_management/
│   ├── learning_and_assessment_management/
│   ├── communication_and_notification/
│   └── docker-compose.yml
│
├── Front-End/
│   ├── React-based frontend for the LMS
│   └── package.json
│
└── README.md
```

## Available Scripts

The backend services have the following scripts available:

- **Install All Dependencies**:

  ```bash
  npm run install:all
  ```

  Installs dependencies for all services in the `services/*` directory.

- **Build All Services**:

  ```bash
  npm run build:all
  ```

  Compiles TypeScript files for all services.

- **Start All Services**:

  ```bash
  npm run start:all
  ```

  Runs all services in parallel using Nodemon for live reloading in development mode.

- **Prisma Migrations**:

  ```bash
  npm run prisma:all
  ```

  Applies Prisma migrations for all services' databases.

- **Prisma Studio**:

  ```bash
  npm run prisma:studio
  ```

  Opens Prisma Studio for the API Gateway's database management.

- **Run Tests**:

  ```bash
  npm test
  ```

  Placeholder script for running tests.

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

Ensure that all new features are covered by appropriate unit and integration tests.

## License

This project is licensed under the **ISC License**.

## Contact

For questions or support, please contact:

- **Email**: [musab0124887085@gmail.com](mailto:musab0124887085@gmail.com)
- **GitHub Issues**: [GitHub Issues Page](https://github.com/musabsamani/E-Learning/issues)
