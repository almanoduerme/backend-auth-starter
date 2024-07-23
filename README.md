# BACKEND AUTH BOILERPLATE

## Description

This project provides a boilerplate for building a backend API with user authentication functionalities. It utilizes TypeScript for strong typing and Express.js for a clean and efficient framework.

## Features

- User authentication with JWT
- Route protection with middleware
- Database integration with Mongoose
- CORS support for secure API requests
- Error handling middleware
- Health check endpoint
- Environment variables for configuration

## Installation

1. Clone the repository

```bash
git clone https://github.com/<your-username>/backend-auth-boilerplate.git
```

2. Install dependencies

```bash
npm install
```

## Usage

1. Create a `.env file` in the project root directory and define the following environment variables:

```env
NODE_ENV=development

# FRONTEND URL
APP_ORIGIN=
MONGO_URI=
JWT_SECRET=
JWT_REFRESH_SECRET=

# A VERIFIED SENDER EMAIL
EMAIL_SENDER=
RESEND_API_KEY=
```

2. Start the development server

```bash
npm run dev
```

3. Start the production server

```bash
npm run build
```

## Development scripts

- `dev`: Starts the development server with hot reloading using tsnd.
- `start`: Starts the server in production mode using Node.js.
- `build`: Builds the project for production by compiling TypeScript code.

## Technologies

- Node.js
- Express.js
- TypeScript
- bcrypt
- cookie-parser
- cors
- dotenv
- jsonwebtoken
- Mongoose
- Sender
- Zod

## Dependencies

Refer to the `package.json` file for a complete list of dependencies and their versions.
