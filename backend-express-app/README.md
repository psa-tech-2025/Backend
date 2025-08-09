# backend-express-app

## Project Overview
This is a Node.js backend application built with Express.js. It provides user registration and login functionality, JWT authentication, and connects to a MongoDB database. The application is structured to facilitate easy maintenance and scalability.

## Folder Structure
```
backend-express-app
├── src
│   ├── controllers
│   │   ├── index.js
│   │   └── userController.js
│   ├── models
│   │   └── user.js
│   ├── routes
│   │   ├── index.js
│   │   └── userRoutes.js
│   ├── middlewares
│   │   ├── authInterceptor.js
│   │   └── errorHandler.js
│   ├── utils
│   │   └── jwt.js
│   ├── config
│   │   └── db.js
│   └── app.js
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd backend-express-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration
- Ensure you have MongoDB installed and running.
- Update the MongoDB connection string in `src/config/db.js` with your database credentials.

## Usage
1. Start the application:
   ```
   npm start
   ```
2. The server will run on `http://localhost:3000`.

## API Endpoints
- **User Registration**
  - `POST /api/register`
  - Request Body: `{ "name": "User Name", "mobile": "1234567890", "password": "yourpassword", "admin": false }`
  
- **User Login**
  - `POST /api/login`
  - Request Body: `{ "mobile": "1234567890", "password": "yourpassword" }`

## Middleware
- **JWT Authentication**: All protected routes require a valid JWT token. The token should be included in the `Authorization` header as a Bearer token.

## Error Handling
- The application includes a centralized error handling middleware to manage errors gracefully.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.