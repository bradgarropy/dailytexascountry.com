const random = require("./utils/random")
const spotify = require("./utils/spotify")
const twitter = require("./utils/twitter")
const {PLAYLIST_ID} = require("./utils/constants")

const handler = async () => {
    let response = null

    // get access token
    response = await spotify.clientCredentialsGrant()

    const {access_token} = response.body
    console.log(`access token granted: ${access_token}`)

    // set access token
    spotify.setAccessToken(access_token)
    console.log(`access token set: ${access_token}`)

    // get playlist
    response = await spotify.getPlaylist(PLAYLIST_ID, {
        fields: "name, tracks(total), external_urls(spotify)",
    })

    const name = response.body.name
    const tracks = response.body.tracks.total
    const link = response.body.external_urls.spotify
    console.log(`found playlist: ${name}`)
    console.log(`total tracks: ${tracks}`)

    // compose tweet
    const messages = [
        "Follow our @spotify playlist for more #texascountry music!",
        "All songs posted here can be found on our @spotify playlist!",
        "Start your weekend off right with some #texascountry music!",
        `${tracks} songs and counting on our #texascountry @spotify playlist!`,
        "Like drinkin? 🍻\nLike dancin? 💃\nThen you'll love our #texascountry @spotify playlist!",
    ]

    const messageNumber = random({max: messages.length - 1})
    const message = messages[messageNumber]
    console.log(`total messages: ${messages.length}`)
    console.log(`picked a random message: (${messageNumber}) ${message}`)

    const tweet = {status: `${message}\n${link}`}
    console.log(`tweet:\n${tweet.status}`)

    // post tweet
    response = await twitter.post("statuses/update", tweet)

    console.log(`tweet posted:\n${response.text}`)

    // response
    response = {
        statusCode: 200,
        body: response.text,
    }

    return response
}

module.exports = {handler}
