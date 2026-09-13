# Student Management System

## 1. Project Overview
The Student Management System is a full-stack web application used to manage student records efficiently. It supports Create, Read, Update, Delete (CRUD), search, and basic validation.

## 2. Objectives
- Manage student details digitally.
- Perform CRUD operations.
- Provide a simple and user-friendly interface.
- Store student data securely in a database.

## 3. Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Django, Django REST Framework
- Database: SQLite
- API: REST API
- Testing: Browser and API testing

## 4. Student Details
- Student Name
- Department
- Email
- Phone Number

## 5. Features
- Add new students
- View student records
- Edit student details
- Delete student records
- Search students
- Phone number validation
- REST API integration

## 6. CRUD Operations
### Create
Adds a new student to the database.

### Read
Displays all student records in the table.

### Update
Allows existing student details to be edited.

### Delete
Removes a student record from the database.

## 7. API Endpoint
Student API:
`http://127.0.0.1:8000/api/students/`

## 8. How to Run

### Start Backend
```bash
venv\Scripts\activate
python manage.py runserver