require("dotenv").config()

const youtube = require("./src/transformers/youtube")

const dtxcChannelId = "UCpbIlFaiv-3188nAWtgL0Iw"

module.exports = {
    siteMetadata: {
        url: "https://dailytexascountry.com",
        title: "Daily Texas Country",
        description: "🤠 Daily Texas Country",
        keywords: [
            "dtxc",
            "dailytexascountry",
            "daily texas country",
            "texas",
            "country",
            "music",
            "texas country",
            "country music",
            "texas country music",
        ],
        email: "bradgarropy@gmail.com",
        twitter: "dailytxcountry",
        youtube: dtxcChannelId,
        instagram: "dailytexascountry",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.TRACKING_ID,
                head: true,
                anonymize: true,
                respectDNT: false,
            },
        },
        {
            resolve: "gatsby-plugin-prefetch-google-fonts",
            options: {
                fonts: [
                    {
                        family: "Patua One",
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-styled-components",
        },
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/components/Layout.js"),
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/,
                },
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: "content/posts",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "content/pages",
            },
        },
        {
            resolve: "gatsby-source-youtube-v2",
            options: {
                channelId: [dtxcChannelId],
                apiKey: process.env.YOUTUBE_API_KEY,
                maxVideos: 50,
            },
        },
        {
            resolve: "gatsby-source-spotify",
            options: {
                clientId: process.env.SPOTIFY_CLIENT_ID,
                clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
                refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
                fetchPlaylists: true,
                fetchRecent: false,
                timeRanges: ["short_term", "medium_term", "long_term"],
            },
        },
        {
            resolve: "gatsby-transformer-json",
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 700,
                        },
                    },
                    {
                        resolve: "gatsby-remark-autolink-headers",
                        options: {
                            maintainCase: false,
                            removeAccents: true,
                        },
                    },
                    {
                        resolve: "gatsby-remark-embedder",
                        options: {
                            customTransformers: [youtube],
                        },
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            rel: "noopener noreferrer",
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-twitter",
        },
        {
            resolve: "gatsby-plugin-instagram-embed",
        },
        {
            resolve: "gatsby-plugin-sharp",
        },
        {
            resolve: "gatsby-transformer-sharp",
        },
        {
            resolve: "gatsby-plugin-catch-links",
        },
        {
            resolve: "@bradgarropy/gatsby-plugin-seo",
        },
    ],
}
