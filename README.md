# Glasses Store Application

This project is a full-stack application for a glasses store, featuring a React frontend and a FastAPI backend. The application allows users to browse glasses, add them to a shopping cart, and place orders.

## Table of Contents

- [Frontend](#frontend)
  - [Installation](#installation)
  - [Running the Frontend](#running-the-frontend)
- [Backend](#backend)
  - [Installation](#installation-1)
  - [Running the Backend](#running-the-backend)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)

## Frontend

The frontend is built with React and uses React Bootstrap for styling and layout. It allows users to view a catalog of glasses, add items to their cart, and proceed to an order form.

### Installation

1. Navigate to the `frontend` directory:
   
   cd frontend
Install the dependencies:
npm install
Running the Frontend
Start the development server:


npm run dev
Open your browser and go to http://localhost:5173 to view the application.

## Backend
The backend is built with FastAPI and provides endpoints for managing glasses and orders. It uses SQLite for data storage.

Installation
Navigate to the backend directory:


cd backend
Create a virtual environment and activate it:


python3 --version
Install the dependencies:


pipenv install
pipenv shell
Running the Backend
Start the FastAPI server:

fastapi dev app.py
The API will be available at http://localhost:8001.

Database Setup
Navigate to the backend directory:


cd backend
Create the SQLite database and tables:


python create_db.py
This script should include the necessary SQL commands to set up your orders and glasses tables.

API Endpoints
Glasses
GET /glasses: Retrieve all glasses.
Example response:
json
[
  {
    "id": 1,
    "name": "Large Round Circle Frame",
    "image": "https://i.pinimg.com/236x/47/85/04/4785040eca2a6df5cdd89f2beaf47548.jpg",
    "price": 20
  },
  ...
]
Orders
POST /order: Create a new order.

Request body:
json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "address": "123 Main St",
  "item_purchased": "Large Round Circle Frame",
  "total_price": 20.0
}
Example response:
json

{
  "message": "Order saved successfully"
}
GET /orders: Retrieve all orders.

Example response:
json

[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St",
    "item_purchased": "Large Round Circle Frame",
    "total_price": 20.0
  },
  ...
]
DELETE /order/{order_id}: Delete an order by ID.

Example response:
json

{
  "message": "Order deleted successfully"
}
Notes
Ensure that the backend is running before attempting to use the frontend order form, as it relies on the backend API to save and retrieve order data.
The SQLite database file db.sqlite should be located in the backend directory. If it does not exist, run the create_db.py script to generate it.
License
This project is licensed under the MIT License.

### Explanation:
- This `README.md` file includes instructions for setting up both the frontend and backend parts of the application.
- It provides commands for installing dependencies, running the development servers, and setting up the SQLite database.
- API endpoint information is provided to help users understand how to interact with the backend.

### Backend Repo Url
https://github.com/Anthony-Ngonde/Opticart-backend.git


### 5 Minute Video Explaining my Project Link
/home/anthony/Videos/Screencasts/Screencast from 17-06-2024 08:33:41 ALASIRI.webm

- Copy the link above and paste it to the browser to see my video