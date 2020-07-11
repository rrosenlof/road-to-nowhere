module.exports = {
  siteMetadata: {
    title: `Guess the Location`,
    description: `Guess the location shown in the map below.`,
    author: `@rrosenlof`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    `gatsby-transformer-json`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
