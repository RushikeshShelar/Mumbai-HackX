
# AuthNestTS (REST API)

Welcome to **AuthNestTS**, a robust Backend API built using Node.js, Express, TypeScript, and MongoDB, offering secure user registration, authentication, and management functionalities.


## Introduction

This project serves as a powerful Backend API solution designed to handle user management efficiently. Leveraging the combined strengths of Node.js, Express, TypeScript, and MongoDB, it offers a seamless experience for user registration, login, user listing, deletion, and updating of user information.
## Features

- **User Registration**: New users can easily register and create - their accounts.
- **User Authentication**: Secure authentication mechanisms for user logins.
- **User Management**: Allows users to manage their own accounts by updating personal information and deleting their profiles.
- **Protected Routes**: Access to certain endpoints is restricted to authenticated users, ensuring data security.
- **Environment Variables**: Utilizes environment variables to ensure security and flexibility in configuration.
This project prioritizes security, scalability, and ease of use, providing a solid foundation for building applications that require robust user management functionalities.

## Setup

To get started with this project locally, follow these steps:

### Prerequisites
Before you begin, ensure you have the following installed on your system:
- **Node.js** (with npm or yarn)
- **MongoDB** 

### Instalation
1. Clone the repository:
```bash 
git clone https://github.com/RushikeshShelar/backend-API.git
```
2. Install dependencies:
```bash 
cd backend-API
npm install
```
## Configuration
1. **Environment Variables:** 
Create a `.env` file in the root directory of the project and add the following environment variables:
```bash
NODE_ENV=development
PORT=8080
MONGODB_URL=your-mongodb-uri
HASH_SECRET=your-secret-key
```
Replace `your-mongodb-url` with the connection URL for your MongoDB instance and `your-secret-key` with a strong secret key for encrypting tokens or sensitive data.

### Start Server
1. **Start the server:**
```bash 
nodemon
```
This will start the server at [http://localhost:8080](http://localhost:8080) (or a different port if specified in the .env file).
## End Points

1. **User Registration**
- Endpoint: `POST /register`
- Description: Registers a new user.
- Request:
    - Method: `POST`
    - Path: `/register`
    - Body: 
    ```bash
    {
        "username": "string",
        "email": "string",
        "password": "string"
    }
    ```
- Response: Returns the newly created user object.

2. **User Login**
- Endpoint: `POST /login`
- Description:  Logs in a user.
- Request:
    - Method: `POST`
    - Path: `/login`
    - Body: 
    ```bash
    {
        "email": "string",
        "password": "string"
    }
    ```
- Response: Returns an authentication token for accessing protected endpoints.

3. **Get List of Users**
- Endpoint: `GET /users`
- Description: Retrieves a list of all users (accessible only to logged-in users).
- Request:
    - Method: `GET`
    - Path: `/users`
    - Headers:
    ```bash
    RUSHI-AUTH = Your Token Here
    ```
- Response: Returns a list of user objects.

4. **Delete User**
- Endpoint: `DELETE /user/:id`
- Description: Deletes the user with the specified ID (only the user themselves can delete their account).
- Request:
    - Method: `DELETE`
    - Path: `/user/:id`
    - Headers:
    ```bash
    RUSHI-AUTH = Your Token Here
    ```
- Response: Returns the Deleted user object.

5. **Update User**
- Endpoint: `PATCH /user/:id`
- Description: Updates user information for the specified ID (only the user themselves can update their information).
- Request:
    - Method: `PATCH`
    - Path: `/user/:id`
    - Headers:
    ```bash
    RUSHI-AUTH = Your Token Here
    ```
    - Body:
    ```bash
    {
        "username": "string",
        "email": "string"
    }
    ```
- Response: Returns the updated user object.


## Acknowledgements

 - [CodeWithAntonio](https://www.codewithantonio.com/)
 - [Harkirat Singh](https://100xdevs.com/)
 - [Readme.so](https://readme.so/)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Authors

- [@Rushikesh Shelar](https://www.github.com/RushikeshShelar)


## Contact

If you have any questions or would like to get in touch, please feel free to reach out to me at rushikeshshelar.cs@gmail.com.

Thank you for visiting my repository!
