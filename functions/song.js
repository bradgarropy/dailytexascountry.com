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
        fields: "name, tracks(total)",
    })

    const name = response.body.name
    const tracks = response.body.tracks.total
    console.log(`found playlist: ${name}`)
    console.log(`total tracks: ${tracks}`)

    // pick random
    const trackNumber = random({max: tracks - 1})
    console.log(`picked a random track: ${trackNumber}`)

    // get track
    response = await spotify.getPlaylistTracks(PLAYLIST_ID, {
        limit: 1,
        offset: trackNumber,
        fields:
            "items(track(artists, album(name), name, external_urls(spotify)))",
    })

    const artist = response.body.items[0].track.artists[0].name
    const album = response.body.items[0].track.album.name
    const track = response.body.items[0].track.name
    const link = response.body.items[0].track.external_urls.spotify
    console.log(`artist: ${artist}`)
    console.log(`album: ${album}`)
    console.log(`track: ${track}`)
    console.log(`link: ${link}`)

    // compose tweet
    const tweet = {status: link}
    console.log(`tweet: ${tweet.status}`)

    // post tweet
    response = await twitter.post("statuses/update", tweet)

    console.log(`tweet posted: ${response.text}`)

    // response
    response = {
        statusCode: 200,
        body: response.text,
    }

    return response
}

module.exports = {handler}
