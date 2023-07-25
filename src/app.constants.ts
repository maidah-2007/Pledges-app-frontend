import {
  SIBASI_EMAIL_SERVICE_OPTIONS,
  SIBASI_SMS_SERVICE_OPTIONS,
} from './app.enum';

export const APP_CURRENT_VERSION = '1.0.0';

export const SIBASI_IS_DEVELOPER_MODE = true;
export const APP_ADMIN_DEV_TEAM_EMAILS = ['dev@sibasi.ltd'];

// Email & SMS From Details
export const SMS_SERVICE_TO_USE: SIBASI_SMS_SERVICE_OPTIONS =
  SIBASI_SMS_SERVICE_OPTIONS.UjumbeSMS;
export const SMS_SERVICE_KEY = 'ZDk4OTM4NWZkZjJiZTIyMzU3NmIzYmQ0NjA3Mjcx';
export const SMS_ACCOUNT_ID = 'dev@sibasi.com'; // e.g. Advanta value is '54', UjumbeSMS is email address;
export const EMAIL_SERVICE_TO_USE: SIBASI_EMAIL_SERVICE_OPTIONS =
  SIBASI_EMAIL_SERVICE_OPTIONS.SENDGRID;
export const EMAIL_SERVICE_KEY =
  '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';
export const EMAIL_FROM_ACCOUNT = 'noreply@ebmsuite.com';
export const SMS_FROM_ACCOUNT = 'Sibasi';

// App Details
export const APP_NAME = 'Monival'; // NOTE: Recommended not to have spaces
export const APP_LOGO_URL =
  'https://sibasi.com/assets/img/sibasi/logo-sibasi.png';
export const APP_AUTHOR = `Sibasi Ltd &copy; ${new Date(
  Date.now(),
).getFullYear()}`;
export const APP_AUTHOR_URL = 'https://www.sibasi.com/';

// Application Links
export const FRONTEND_URL = SIBASI_IS_DEVELOPER_MODE
  ? 'https://support.sibasi.ltd'
  : 'https://support.sibasi.ltd';
export const BACKEND_URL = SIBASI_IS_DEVELOPER_MODE
  ? 'https://helpdeskapi.sibasi.ltd'
  : 'https://helpdeskapi.sibasi.ltd';
export const VERIFY_EMAIL_URL = SIBASI_IS_DEVELOPER_MODE
  ? 'http://172.173.210.63:5050/#/verify-account'
  : 'http://172.173.210.63:5050/#/verify-account';
export const WEBAPPURL = SIBASI_IS_DEVELOPER_MODE
  ? 'https://support.sibasi.ltd'
  : 'https://support.sibasi.ltd';
export const WEBAPPURLREGISTRATIONCODE = SIBASI_IS_DEVELOPER_MODE
  ? 'https://sibasidev.eastus.cloudapp.azure.com/#/auth/register'
  : 'https://ebmsuite.com/#/auth/register';
export const ANDROIDAPPURL = SIBASI_IS_DEVELOPER_MODE ? '' : '';
export const APPLEAPPURL = SIBASI_IS_DEVELOPER_MODE ? '' : '';

// Database Constants
export const MONGOSERVERURL = SIBASI_IS_DEVELOPER_MODE
  ? 'mongodb://127.0.0.1:27017/'
  : 'mongodb://127.0.0.1:27017/';
export const MONGOFILESERVERURL = SIBASI_IS_DEVELOPER_MODE
  ? 'mongodb://127.0.0.1:27017/'
  : 'mongodb://127.0.0.1:27017/';
export const MONGOLOGSERVERURL = SIBASI_IS_DEVELOPER_MODE
  ? 'mongodb://127.0.0.1:27017/'
  : 'mongodb://127.0.0.1:27017/';
export const MONGOSERVERDBNAME = 'Monival';
export const MONGOSERVERFILESDBNAME = MONGOSERVERDBNAME + 'FILES';
export const MONGOSERVERLOGDBNAME = MONGOSERVERDBNAME + 'LOGS';
export const SIBASI_MONGODB_GRIDFS = 'SibasiFiles';
export const SIBASI_GRIDFS_CONNECTION_URL =
  MONGOFILESERVERURL + MONGOSERVERFILESDBNAME;

// Authentication Constants
export const APP_JWT_SECRET = 'CHANGE ME';
export const JWT_REFRESH_SECRET = 'CHANGE ME';
export const SIBASI_AUTH_SERVICE_CLIENT_ID = 'CHANGE ME';
export const SIBASI_AUTH_SERVICE_SECRET = 'CHANGE ME';
export const EBMSUITE_LOGIN_ROUTE = 'CHANGE ME';
export const REGISTERED_GOOGLE_OAUTH_URL = 'CHANGE ME';
export const GOOGLE_CLIENT_ID = 'CHANGE ME';
export const GOOGLE_SECRET = 'CHANGE ME';
export const FACEBOOK_APP_ID = 'CHANGE ME';
export const FACEBOOK_SECRET = 'CHANGE ME';
export const AZURE_CLIENT_ID = 'CHANGE ME';
export const AZURE_CLIENT_SECRET = 'CHANGE ME';
export const STRIPE_API_KEY = 'CHANGE ME';

// OTP Validity time in milliseconds
export const OTP_VALIDITY_TIME = 604800000;
