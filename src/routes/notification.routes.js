import express from 'express';
import { createNotifications } from '../controllers/notification.controllers.js';
import { getAppInfo } from '../config/oneSignal.js';

const router = express.Router();
router.use(getAppInfo);

router.post('/create', createNotifications);

export default router;