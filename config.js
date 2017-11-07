// todo: get most of the values from env variables
const config = {
  WEB_PORT: process.env.PORT || '3000',
  ASSETS_PATH: '/assets/',
  HOST: process.env.HOST || '0.0.0.0',
  APP_NAME: 'react-redux-saucepan',
};

module.exports = config;
