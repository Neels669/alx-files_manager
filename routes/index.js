import express from 'express';
import auth from '../utils/auth';
import { getStatus, getStats } from '../controllers/AppController';
import { postNew, getMe } from '../controllers/UsersController';
import { getConnect, getDisconnect } from '../controllers/AuthController';
import { postUpload } from '../controllers/FilesController';

const router = express.Router();

// AppController routes

// returns true if Redis is alive and if the DB is alive too
router.get('/status', getStatus);
// returns the number of users and files in DB
router.get('/stats', getStats);
