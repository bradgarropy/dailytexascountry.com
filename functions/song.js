const random = require("./utils/random")
const Spotify = require("./utils/spotify")
const {tweet} = require("./utils/twitter")
const {PLAYLIST_ID} = require("./utils/constants")
const {getTodaysTrack, deleteTodaysTrack} = require("./utils/airtable")

const handler = async () => {
    let response = null

    const spotify = await Spotify()

    const todaysTrack = await getTodaysTrack()

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

    const tracks = response.body.tracks.total
    const trackNumber = random({max: tracks - 1})

    response = await spotify.getPlaylistTracks(PLAYLIST_ID, {
        limit: 1,
        offset: trackNumber,
        fields: "items(track(external_urls(spotify)))",
    })

    const link = response.body.items[0].track.external_urls.spotify
    response = await tweet(link)

    response = {
        statusCode: 200,
        body: response.text,
    }

    return response
}

module.exports = {handler}
