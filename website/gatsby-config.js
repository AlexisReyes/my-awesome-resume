module.exports = {
  pathPrefix: process.env.PATH_PREFIX,
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://alexisreyes.xyz", // Used for sitemap generation
        manifestSettings: {
          favicon: "content/images/favicon.png", // Path is relative to the root
          siteName: "My Awesome Resume", // Used in manifest.json
          shortName: "Resume", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
        },
        googleAnalytics: {
            trackingId: "G-P65BS8WK7E",
            anonymize: true, // Default true
            environments: ["production", "development"] // Default ["production"]
        }
      },
    },
  ],
};
