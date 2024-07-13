import OneSignal from '@onesignal/node-onesignal';

const configuration = OneSignal.createConfiguration({
    userAuthKey: process.env.USER_AUTH_KEY,
    appKey: process.env.REST_API_KEY
});

//Class to push notification
export const client = new OneSignal.DefaultApi(configuration);

// Middleware to get app information
export const getAppInfo = async(req, res, next) => {
    try {
        const app = await client.getApp(process.env.APP_ID);
        req.appInfo = app;
        next();
    } catch (error) {
        console.error(error);
        next(error);
    }
};