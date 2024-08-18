# REST-webbtjänst
## Overview

This project is a RESTful API for a restaurant (Jafra) management system, designed to handle CRUD operations for menu items and reservations. 
It incorporates JWT (JSON Web Tokens) for authentication and uses MongoDB for data storage.

## Features

  * User Authentication: Secure endpoints with JWT authentication.
  * Menu Management: Create, read, update, and delete menu items.
  * Reservation Management: Create, read, and delete reservations.
  * Environment Configuration: Configurable settings via .env file.


## API Endpoints
* Authentication

    Login

  Endpoint: POST /api/auth/login

  Description: Authenticate user and get a JWT token.

  Request Body:

  json

{
  "username": "user",
  "password": "password"
}

Response:

json

   {
          "token": "your_jwt_token_here",
          "role": "user"
        }

* Menu Management

    1- Get All Menu Items
        Endpoint: GET /api/menu
        Description: Retrieve all menu items.

    2- Add a New Menu Item

   Endpoint: POST /api/menu

  Description: Add a new menu item (requires authentication).

   Request Body:

  json

    {
      "name": "Pasta",
      "description": "Delicious Italian pasta.",
      "price": 12.99,
      "image": "pasta.jpg"
    }

3- Update a Menu Item

  Endpoint: PUT /api/menu/:id

  Description: Update a specific menu item by ID (requires authentication).

  Request Body:

  json

   {
          "name": "Updated Pasta",
          "description": "Updated delicious Italian pasta.",
          "price": 14.99,
          "image": "pasta_updated.jpg"
   }

   4- Delete a Menu Item
        Endpoint: DELETE /api/menu/:id
        Description: Delete a specific menu item by ID (requires authentication).

* Reservation Management

    1- Get All Reservations
        Endpoint: GET /api/reservation
        Description: Retrieve all reservations (requires authentication).

    2- Add a New Reservation

   Endpoint: POST /api/reservation

   Description: Add a new reservation.

  Request Body:

  json

    {
      "name": "John Doe",
      "phone": "1234567890",
      "date": "2023-08-18",
      "time": "19:00",
      "guests": 4
    }

3- Delete a Reservation

  Endpoint: DELETE /api/reservation/:id
  Description: Delete a specific reservation by ID (requires authentication).

    
