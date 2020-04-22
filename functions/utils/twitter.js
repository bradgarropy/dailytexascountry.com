require("dotenv").config()
const Twitter = require("twitter")

const twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

const tweet = async content => {
    const response = await twitter.post("statuses/update", {status: content})
    return response
}

module.exports = {tweet}
