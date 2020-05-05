require("dotenv").config()
const Airtable = require("airtable")
const {AIRTABLE_BASE_ID} = require("../utils/constants")

Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_API_KEY,
})

const airtable = Airtable.base(AIRTABLE_BASE_ID)

const filter = "IS_SAME({date}, TODAY())"

const getTodaysTrack = async () => {
    const results = await airtable("dtxc")
        .select({filterByFormula: filter})
        .firstPage()

    const tracks = results.map(result => result.fields)
    const track = tracks[0]

    return track
}

const deleteTodaysTrack = async () => {
    const results = await airtable("dtxc")
        .select({filterByFormula: filter})
        .firstPage()

    const track = results[0]

    await airtable("dtxc").destroy(track.id)
    return
}

module.exports = {getTodaysTrack, deleteTodaysTrack}
