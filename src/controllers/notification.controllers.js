import client from '../config/oneSignal.js';
import * as OneSignal from '@onesignal/node-onesignal';
const app = new OneSignal.App();
app.gcm_key = process.env.API_KEY;
app.android_gcm_sender_id = process.env.APP_ID;

export const createNotifications = async(req, res, next) => {
    try {
        const { title, message } = req.body;
        const notification = new OneSignal.Notification();
        notification.app_id = app.id;
        notification.name = 'test_notification_name';
        notification.contents = {
            en: title
        };

        notification.headings = {
            en: message
        };
        const result = await client.createNotification(notification);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
};