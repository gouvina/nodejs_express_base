// Global environment variables
require('dotenv').config();

// Third-party dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// Local dependencies
const routes = require('./_constants/routes');
const usersRouter = require('./user/user.router');
const { CORS_ORIGIN_WHITELIST } = require('./_config');

// CORS options
const corsOptions = {
  credentials: true,
  origin(origin, callback) {
    if (CORS_ORIGIN_WHITELIST.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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
