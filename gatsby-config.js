require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Parth Shah`,
    siteTitleAlt: `Parth Shah - Technologist | Interested in Software Development, Distributed Computing and Cloud Infrastructure.`,
    siteUrl:`https://parthshah.site`,
    author: `Parth Shah`,
    description: "Parth Shah - Technologist | Interested in Software Development, Distributed Computing and Cloud Infrastructure.",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'resume-parthshah',
        accessToken: process.env.API_KEY,
        schemas: {
          resumehomepage: require('./src/schemas/resumehomepage.json')
        }
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Resume`,
            slug: `/resume`,
          }
        ],
        externalLinks: [
          {
            name: `linkedin`,
            url: `https://www.linkedin.com/in/parthashah/`,
          },
          {
            name: `twitter`,
            url: `https://twitter.com/parth_sh`,
          },
          {
            name: `instagram`,
            url: `https://www.instagram.com/parth_sh29`,
          },
          {
            name: `mail`,
            url: `mailto:partha.shah29@gmail.com`,
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Parth Shah`,
        short_name: `parth-site`,
        description: `Technologist | Interested in Software Development, Distributed Computing and Cloud Infrastructure.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
  ],
}
