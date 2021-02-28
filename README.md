# Base - Backend Express (Node)
Base Project for generating Backend APIs using Nodejs and Express for HTTP Server and MongoDB for database management.

## Branches
Depending on what version of the base project is needed (and which features), different groups of features have been organized in the next branches:
- `main` - Basic version.
- `mongo` - Simple database management using `mongodb`.
- `jwt` - Simple authentication management using a `mongo` database and `jwt` tokens.
- `postgres` - Simple database management using `postgresql`.

**Current Branch:** `main`

## Features
This version of the base project supports the next features:
- HTTP server middleware management
- CORS Validation
- Error Handling
- Constants Management

## Requirements
In order to run the project, it is needed to have downloaded and installed the following software:
- Node.js - https://nodejs.org/en/download/
- Nodemon - `npm install -g nodemon` <br>
(recommended, for debugging)

## Setup & Run
In order to run the project, it is needed to follow the next steps, taking into account they are designed to run the project *locally*. URL's should change otherwise:
1. Clone repository
2. Create `.env` file in root folder of project with the following variables:
    - PORT=3000 - *(Or whatever is best)*
    - CORS_ORIGIN_WHITELIST=["localhost"] - *(This list allows hosts to connect)*
3. Run `npm install`
4. Run `npm start` for starting server or `npm test` for starting server with `nodemon`


