require("dotenv").config()
const fetch = require("node-fetch")

const CONVERTKIT_FORM_ID = "1378571"

const handler = async event => {
    console.log("SUBSCRIBE")
    const {email, tags} = JSON.parse(event.body)

    let response

    const url = `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`

    const data = {
        api_key: process.env.CONVERTKIT_API_KEY,
        email,
        tags,
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    response = await fetch(url, options)
    const json = await response.json()

    response = {
        statusCode: 200,
        body: JSON.stringify(json),
    }

    return response
}

module.exports = {handler}
