const random = require("./utils/random")
const Spotify = require("./utils/spotify")
const {tweet} = require("./utils/twitter")
const {PLAYLIST_ID} = require("./utils/constants")

const handler = async () => {
    let response = null

    const spotify = await Spotify()

    response = await spotify.getPlaylist(PLAYLIST_ID, {
        fields: "tracks(total), external_urls(spotify)",
    })

    const tracks = response.body.tracks.total
    const link = response.body.external_urls.spotify

    const messages = [
        "Follow our @spotify playlist for more #texascountry music!",
        "All songs posted here can be found on our @spotify playlist!",
        "Start your weekend off right with some #texascountry music!",
        `${tracks} songs and counting on our #texascountry @spotify playlist!`,
        "Like drinkin? 🍻\nLike dancin? 💃\nThen you'll love our #texascountry @spotify playlist!",
    ]

    const messageNumber = random({max: messages.length - 1})
    const message = messages[messageNumber]

    response = await tweet(`${message}\n${link}`)

    response = {
        statusCode: 200,
        body: response.text,
    }

    return response
}

module.exports = {handler}
