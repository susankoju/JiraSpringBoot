import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import { checkJwt } from './middlewares/auth';
import { get_current_user } from './middlewares/user';

const jwtAuthz = require('express-jwt-authz');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  '/v1',
  // checkJwt,
  get_current_user,
  // jwtAuthz(['batch:upload']),
  indexRouter
);

export default app;
