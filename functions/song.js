const random = require("./utils/random")
const Spotify = require("./utils/spotify")
const {tweet} = require("./utils/twitter")
const {PLAYLIST_ID} = require("./utils/constants")
const {getTodaysTrack, deleteTodaysTrack} = require("./utils/airtable")

const handler = async event => {
    let response = null
    const functionSecret = event.headers["authorization"]

    if (functionSecret !== process.env.FUNCTION_SECRET) {
        response = {
            statusCode: 400,
            body: "Unauthorized",
        }

        return response
    }

    const spotify = await Spotify()
    console.log("LOGGED IN TO SPOTIFY")

    const todaysTrack = await getTodaysTrack()
    console.log("GOT TODAYS TRACK")

    if (todaysTrack) {
        response = await tweet(todaysTrack.link)

        await deleteTodaysTrack()

        response = {
            statusCode: 200,
            body: response.text,
        }

        return response
    }

    response = await spotify.getPlaylist(PLAYLIST_ID, {fields: "tracks(total)"})
    console.log("GOT PLAYLIST")

    const tracks = response.body.tracks.total
    const trackNumber = random({max: tracks - 1})

    response = await spotify.getPlaylistTracks(PLAYLIST_ID, {
        limit: 1,
        offset: trackNumber,
        fields: "items(track(external_urls(spotify)))",
    })
    console.log("GOT PLAYLIST TRACKS")

    const link = response.body.items[0].track.external_urls.spotify
    response = await tweet(link)
    console.log("TWEETED")

    response = {
        statusCode: 200,
        body: response.text,
    }

    return response
}

module.exports = {handler}
