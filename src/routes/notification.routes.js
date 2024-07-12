import express from 'express';
import { createNotifications } from '../controllers/notification.controllers.js';

const router = express.Router();

router.post('/create', createNotifications);

export default router;
