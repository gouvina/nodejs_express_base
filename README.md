# Base - Backend Express (Node)
Base Project for generating Backend APIs using Nodejs and Express for HTTP Server and MongoDB for database management.

## Features
This version of the base project supports the following features:
- HTTP server middleware management
- CORS Validation
- Error Handling
- Constants Management
- Basic Database Handling

## Requirements
In order to run the project, the following software is needed:
- Node.js - https://nodejs.org/en/download/
- MongoDB - https://www.mongodb.com/try/download/community
The next ones are not required, but recommended
- Nodemon - `npm install -g nodemon` (for debugging)
- MongoDB Compass - https://www.mongodb.com/try/download/compass (for DB management)

## Setup & Run
In order to run the project follow the next steps, taking into account they are designed to run the project *locally*. URL's should change otherwise:
1. Clone repository
2. Create DB in MongoDB by name `nodejs-express` and collection name `users`
3. Create `.env` file in root folder of project with the following variables:
    - PORT=3000 - *(Or whatever is best)*
    - CORS_ORIGIN_WHITELIST=["localhost"] - *(This list allows hosts to connect)*
    - DATABASE_URL=mongodb://localhost:27017/nodejs-express - *(This is assuming you created DB with name nodejs-express)*
4. Run `npm install`
5. Run `npm start` for starting server or `npm test` for starting server with `nodemon`


