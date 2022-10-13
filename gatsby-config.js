require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Daniel Michael`,
    description: `Daniel Michael's artist website`,
    author: `@dannymichaels`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/assets/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Kodchasan',
              variants: ['400', '500', '600', '700'],
            },
            {
              family: 'Exo',
              variants: ['300', '400', '500', '600', '700'],
            },
          ],
        },
      },
    },
  ],
};
