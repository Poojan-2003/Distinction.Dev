# CRUD Project

This project demonstrates a CRUD (Create, Read, Update, Delete) application built using **React** for the frontend and **Node.js** with **MySQL** for the backend. The application includes three schemas:

1. **Person**
2. **Job**
3. **Company**

## Features

### General Features
- Full-stack implementation for managing three distinct schemas.
- API endpoints to perform CRUD operations for each schema.
- MySQL database for efficient data storage and retrieval.
- Responsive and user-friendly UI built with React.

### Schema-Specific Features

#### Person
- Attributes: `id`, `name`, `company`, `age`
- Features:
  - Add a new person with details.
  - View all persons.
  - Edit person details.
  - Delete a person.

#### Job
- Attributes: `id`, `department`, `salary`
- Features:
  - Add a new job with details.
  - View all jobs.
  - Edit job details.
  - Delete a job.

#### Company
- Attributes: `id`, `name`, `location`
- Features:
  - Add a new company with details.
  - View all companies.
  - Edit company details.
  - Delete a company.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js
- MySQL
- npm or yarn
- Git

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Set Up the Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` file:
   Create a `.env` file in the `backend` directory with the following variables:
   ```env
   DB_HOST=<Yout DB host>
   DB_USER=<Your DB user>
   DB_PASSWORD=<Your DB Password>
   DB_NAME=<Your DB name>
   DB_WAIT_FOR_CONNECTIONS=true
   DB_CONNECTION_LIMIT=10
   DB_QUEUE_LIMIT=0
   ```
4. Initialize the database:
   - Import the provided SQL file into MySQL to set up the schemas:
     ```
     mysql -u root -p < database.sql
     
        CREATE TABLE companies (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        built_date DATE NOT NULL,
        ceo VARCHAR(255) NOT NULL
        );

        CREATE TABLE job (
        id SERIAL PRIMARY KEY,
        department VARCHAR(255) NOT NULL,
        salary NUMERIC(10, 2) NOT NULL
        );

        CREATE TABLE persons (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        salary DECIMAL(10, 2) NOT NULL,
        department VARCHAR(255) NOT NULL
        );

    ```
5. Start the backend server:
   ```bash
   npm start
   ```

### 3. Set Up the Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

## Usage

1. Access the application in your browser at `http://localhost:3000`.
2. Perform CRUD operations on the `Person`, `Job`, and `Company` schemas through the user interface.

## API Endpoints

### Person
| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/persons`        | Get all persons          |
| POST   | `/api/persons`        | Add a new person         |
| PUT    | `/api/persons/:id`    | Update person by ID      |
| DELETE | `/api/persons/:id`    | Delete person by ID      |

### Job
| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/jobs`           | Get all jobs             |
| POST   | `/api/jobs`           | Add a new job            |
| PUT    | `/api/jobs/:id`       | Update job by ID         |
| DELETE | `/api/jobs/:id`       | Delete job by ID         |

### Company
| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/companies`      | Get all companies        |
| POST   | `/api/companies`      | Add a new company        |
| PUT    | `/api/companies/:id`  | Update company by ID     |
| DELETE | `/api/companies/:id`  | Delete company by ID     |

## Project Structure

```plaintext
crud-project/
|-- backend/
|   |-- .env
|   |-- index.js
|-- frontend/
|   |-- src/
|       |-- components/
                    |---- Jobs.js
                    |---- Person.js
                    |---- Company.js
|       |-- App.js
|       |-- index.js
|-- README.md
```

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MySQL

