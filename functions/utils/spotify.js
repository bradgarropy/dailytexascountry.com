require("dotenv").config()
const Spotify = require("spotify-web-api-node")

const spotify = new Spotify({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

module.exports = spotify
