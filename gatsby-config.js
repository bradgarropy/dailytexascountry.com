require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        siteUrl: "https://dailytexascountry.com",
        title: "DTXC",
        description: "🤠 daily texas country",
        keywords: ["gatsby", "react", "scss", "eslint"],
        email: "bradgarropy@gmail.com",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "daily texas country",
                short_name: "dtxc",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#ffffff",
                display: "minimal-ui",
                icon: "static/icon.png",
            },
        },
        {
            resolve: "gatsby-plugin-offline",
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
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: ["roboto"],
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
    ],
}
