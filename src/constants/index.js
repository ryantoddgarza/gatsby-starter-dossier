const clientList = require('./clientList');
const contactInfo = require('./contactInfo');
const paths = require('./paths');
const siteMetadata = require('./siteMetadata');

module.exports = {
  clientList,
  ...contactInfo,
  ...paths,
  ...siteMetadata,
};
