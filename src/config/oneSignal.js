import * as OneSignal from '@onesignal/node-onesignal';

const configParams = {
    userAuthKey: '',
    restApiKey: ''
};
const configuration = OneSignal.createConfiguration(configParams);

const client = new OneSignal.DefaultApi(configuration);

export default client;