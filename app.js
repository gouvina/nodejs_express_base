// Global Environment Variables
require('dotenv').config();

// Global dependencies
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// Local dependencies
const routes = require('./constants/routes');
const usersRouter = require('./routes/users');
const { CORS_ORIGIN_WHITELIST, DATABASE_URL } = require('./config');

// CORS options
const corsOptions = {
    origin(origin, callback) {
      if (CORS_ORIGIN_WHITELIST.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  };

// Express app rules
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));

// Routes
app.use(routes.USERS, usersRouter);

module.exports = app;
