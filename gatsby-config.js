module.exports = {
  siteMetadata: {
    title: `kevinrmendez`,
    description: `personal website`,
    author: `@kevinrmendez`,
    siteUrl: `https://kevinrmendez.com`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
    resolve: 'gatsby-plugin-react-svg',
    options: {
        rule: {
          include: /assets/
        }
    }
},
{
   resolve: `gatsby-plugin-prefetch-google-fonts`,
   options: {
       fonts: [
         {
           family: `Open Sans`,
            variants: [`400`, `700`]
         },
         {
            family: `Roboto Condensed`,
            variants: [`400`, `700`]
          },
       ]
     }
},

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#EEC643`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
     resolve: `gatsby-plugin-google-analytics`,
     options: { trackingId: "UA-104379645-2",}
   },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
