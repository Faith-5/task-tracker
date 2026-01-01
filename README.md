# 📝 Task Tracker Web App

A simple full-stack **Task Tracker** web application built with **FastAPI**, **SQLAlchemy**, and **Vanilla HTML/CSS/JavaScript**.  
This project was created to practice backend CRUD operations, database integration, and frontend–backend communication without using frontend frameworks.

---

## 🚀 Features

- Create new tasks  
- View all tasks  
- Mark tasks as completed / uncompleted  
- Delete tasks  
- Persistent storage using SQLite  
- RESTful API with automatic Swagger documentation  

---

## 🛠 Tech Stack

### Backend
- **FastAPI** – API framework  
- **SQLAlchemy** – ORM for database operations  
- **Pydantic** – Data validation and serialization  
- **SQLite** – Lightweight database  

### Frontend
- **HTML**
- **CSS**
- **Vanilla JavaScript (Fetch API)**

---

## 📁 Project Structure

```text
task_tracker/
│
├── app/
│   ├── main.py        # FastAPI app and routes
│   ├── database.py    # Database configuration
│   ├── models.py      # SQLAlchemy models
│   ├── schemas.py     # Pydantic schemas
│
├── static/
│   ├── index.html     # Frontend UI
│   ├── style.css      # Styling
│   └── script.js      # Frontend logic
│
└── requirements.txt
```

---

## ▶️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Faith-5/task-tracker.git
cd task-tracker
```

### 2. Create and activate a virtual environment (optional but recommended)
```bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the application
```bash
uvicorn app.main:app --reload
```

### 5. Open in browser
- **App UI:** http://127.0.0.1:8000/
- **API Docs:** http://127.0.0.1:8000/docs

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tasks` | Create a task |
| GET | `/tasks` | Get all tasks |
| PUT | `/tasks/{id}` | Toggle task completion |
| DELETE | `/tasks/{id}` | Delete a task |

---

## 🎯 Learning Goals

- Understand FastAPI project structure
- Learn SQLAlchemy ORM basics
- Use Pydantic for request/response validation
- Connect a frontend to a backend API
- Build a complete CRUD application

---

## 👤 Author

Built by **Faith Bamidele**