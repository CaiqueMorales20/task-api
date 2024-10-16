# Task Api

The Task API is a RESTful web service designed for efficient task management. It allows users to perform essential operations on tasks, including creating, retrieving, updating, marking as completed, and deleting tasks. The API is built with a focus on simplicity and performance, making it ideal for developers seeking a reliable backend solution for task-oriented applications.

## Key Features
- CRUD Operations: Supports creating, reading, updating, and deleting tasks.
- Metrics Collection: Integrates Prometheus for monitoring application metrics.
- Testing Framework: Includes unit and integration tests with Jest to ensure reliability.
- Containerization: Utilizes Docker for consistent development and deployment environments.

## Endpoints

### **Get All Tasks**

```http
GET /tasks
```

Retrieves all tasks from the database.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| None      |          |                                    |

**Response**  
`200 OK` – Returns an array of task objects.  
`400 Bad Request` – If an error occurs during retrieval.

---

### **Create a New Task**

```http
POST /tasks
```

Creates a new task with the provided name.

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `name`    | `string` | **Required**. Name of task. |

**Response**  
`200 OK` – Returns the created task object.  
`400 Bad Request` – If task creation fails.

---

### **Update a Task by ID**

```http
PUT /tasks/{id}
```

Updates the name of a task identified by its ID.

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `id`      | `number` | **Required**. Task ID.      |
| `name`    | `string` | **Required**. New task name.|

**Response**  
`200 OK` – Returns the updated task object.  
`400 Bad Request` – If task update fails.

---

### **Mark Task as Completed**

```http
PATCH /tasks/{id}
```

Marks a task as completed by its ID.

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `id`      | `number` | **Required**. Task ID.      |

**Response**  
`200 OK` – Returns the updated task object with completion status.  
`400 Bad Request` – If marking as completed fails.

---

### **Delete a Task by ID**

```http
DELETE /tasks/{id}
```

Deletes a task from the database by its ID.

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `id`      | `number` | **Required**. Task ID.      |

**Response**  
`200 OK` – Returns the deleted task object.  
`400 Bad Request` – If task deletion fails.


### **Get Metrics**

```http
GET /metrics
```

Retrieves application metrics collected via Prometheus.

| Parameter | Type     | Description |
| :-------- | :------- | :-----------|
| None      |          |             |

**Response**  
`200 OK` – Returns metrics in the Prometheus text format.  
`400 Bad Request` – If metrics collection fails.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL="postgresql://docker:docker@localhost:5432/mydb?schema=public"`


## Run Locally

Clone the project

```bash
  git clone https://github.com/CaiqueMorales20/task-api
```

Go to the project directory

```bash
  cd task-api
```

Install dependencies

```bash
  bun install
```

Start the services in detached mode

```bash
  docker compose up -d
```


Start the server

```bash
  bun run start
```


## Running Tests

To run tests, run the following command
 
```bash
  bun run test
```

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Minimalist web framework for Node.js.
- **Prisma ORM**: Next-generation ORM for database access and management.
- **Docker**: Containerization platform for consistent development and deployment environments.
- **prom-client**: Prometheus client for collecting application metrics.
- **Jest**: Testing framework for unit and integration tests.
- **Render**: Platform for hosting backend applications seamlessly.
- **Neon**: Serverless Postgres database hosting for scalable data management.

## Demo

You can access the live API at: [https://task-api-3p3m.onrender.com](https://task-api-3p3m.onrender.com)

You can find the JSON collection for Insomnia/Postman at the following link: [Download Insomnia/Postman JSON Collection](https://www.dropbox.com/scl/fi/c3bjmlelnsoq6py89vqkh/insomnia_task_api?rlkey=t2zrui2qjm2adsepd1onv1w2x&st=jos891mv&dl=0)