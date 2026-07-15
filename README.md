## Personal Expense Tracker

A full-stack Personal Expense Tracker application built using the MERN Stack. This application allows users to add, view, and delete expenses while calculating the total amount spent.


## Features

- Add a new expense
- View all expenses
- Delete an expense
- Calculate total amount spent
- Responsive and clean user interface
- Confirmation dialog before deleting an expense


## Tech Stack

    ## Frontend

    - React (Vite)
    - JavaScript
    - CSS3
    - Axios
    - React Icons
    - SweetAlert2

    ### Backend

    - Node.js
    - Express.js
    - MongoDB Atlas
    - Mongoose
    - Dotenv
    - CORS
    - Nodemon


## Project Structure

Personal-Expense-Tracker/
│
├── frontend/        # React (Vite) Frontend
├── backend/        # Express Backend
└── README.md


## REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/expenses | Add a new expense |
| GET | /api/expenses | Get all expenses |
| DELETE | /api/expenses/:id | Delete an expense |


## Installation

    ### Clone Repository

    ```bash
    git clone <repository-url>
    ```

    ### Backend

    ```bash
    cd server
    npm install
    npm run dev
    ```

    ### Frontend

    ```bash
    cd client
    npm install
    npm run dev
```


## Environment Variables

Backend (.env)


PORT=5000
MONGO_URI=your_mongodb_connection_string


Frontend (.env)


VITE_API_URL=http://localhost:5000/api


## Future Improvements

This project can be enhanced with additional features such as:

- User Authentication (JWT)
- User Registration & Login
- Individual user expense management
- Edit/Update expense
- Search expenses
- Filter expenses by category
- Sort expenses by date or amount
- Pagination for large datasets
- Dark Mode
- Toast notifications
- Role-based access control (Admin/User)


##  Author

Developed by **Fidyan Pandhre**