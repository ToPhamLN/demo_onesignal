export const createNotifications = async (req, res, next) => {
  try {
    const { title, message } = req.body;
    const notification = new OneSignal.Notification();
    notification.app_id = req.appInfo.id;
    notification.name = 'test_notification_name';
    notification.contents = {
      en: message
    };
    notification.headings = {
      en: title
    };

    const result = await client.createNotification(notification, {
      headers: {
        Authorization: `Basic ${process.env.USER_AUTH_KEY}`
      }
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
