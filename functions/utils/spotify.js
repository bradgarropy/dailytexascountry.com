require("dotenv").config()
const Spotify = require("spotify-web-api-node")

const spotify = new Spotify({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

const login = async () => {
    const response = await spotify.clientCredentialsGrant()
    spotify.setAccessToken(response.body.access_token)

    return spotify
}

module.exports = login
