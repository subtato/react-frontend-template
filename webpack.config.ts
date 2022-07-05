// eslint-disable-next-line max-len
const config =
  process.env.NODE_ENV === 'production'
    ? require('./webpack/production')
    : require('./webpack/development');
export default config;
