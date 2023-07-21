require("dotenv").config()
const {TwitterApi} = require("twitter-api-v2")

const twitter = new TwitterApi({
    appKey: process.env.TWITTER_CONSUMER_KEY,
    appSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

const tweet = async content => {
    const response = await twitter.readWrite.v2.tweet(content)
    return response
}

module.exports = {tweet}
