const { title } = require('./src/constants');

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title,
  },
  plugins: [
    // First-priority plugins
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    // Other plugins
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'resources',
        path: `${__dirname}/src/resources`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    'gatsby-transformer-sharp',
    // Last-priority plugins
  ],
};
