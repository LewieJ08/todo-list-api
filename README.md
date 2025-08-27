# To-Do List API

A **RESTful API** built with **Node.js**, **Express.js**, and **MongoDB** for managing tasks with **basic authentication**.  
This project goes a step beyond my previous **Blog API** by adding **users**, **authentication middleware**, and linking users to their tasks.

![To-Do List API Diagram](./assets/todo-api-diagram.png)

---

## 🚀 Features

- User authentication system (register, login, logout).  
- Auth middleware using tokens stored in MongoDB.  
- Create, read, update, and delete **tasks**.  
- Each task is linked to the user who created it.  
- Protected routes (only logged-in users can manage their tasks).  

---

## 🛠️ Tech Stack

- **Node.js** – Server runtime  
- **Express.js** – Backend framework  
- **MongoDB** – NoSQL database  

## 👤 User Endpoints

| Method | Endpoint          | Description                         |
|--------|-------------------|-------------------------------------|
| GET    | `/users`          | Get all users                       |
| POST   | `/users/register` | Create and register a new user      |
| POST   | `/users/login`    | Log a user in                       |
| POST   | `/users/logout`   | Log a user out                      |

## 📄 Task Endpoints

> Task Endpoints under development