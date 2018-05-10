module.exports = {
  siteMetadata: {
    title: 'Rae Farine | Front-end Engineer',
    author: 'Rae Farine',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
