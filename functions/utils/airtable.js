require("dotenv").config()
const Airtable = require("airtable")
const {AIRTABLE_BASE_ID} = require("../utils/constants")

Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_API_KEY,
})

const airtable = Airtable.base(AIRTABLE_BASE_ID)

const getTodaysTrack = async () => {
    const filter = `
        IS_SAME(
            {Date},
            DATETIME_FORMAT(
                SET_TIMEZONE(
                    TODAY(),
                    'America/Chicago'
                ),
                'M/D/YYYY'
            ),
            'days'
        )
    `

    const results = await airtable("dtxc")
        .select({filterByFormula: filter})
        .firstPage()

    const tracks = results.map(result => result.fields)
    return tracks
}

module.exports = {getTodaysTrack}
