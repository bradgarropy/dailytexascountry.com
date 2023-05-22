require("dotenv").config()
const Twitter = require("twitter")

const twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

console.log("NEW TWITTER")
console.log(twitter)

const tweet = async content => {
    console.log("INSIDE TWEET")
    console.log(content)
    try {
        const response = await twitter.post("statuses/update", {
            status: content,
        })
        console.log(response)
        console.log(response.ok)
        console.log(response.status)
        console.log(response.statusText)
        return response
    } catch (error) {
        console.log("ERROR WITH TWITTER.POST")
        console.log(error)
    }
}

module.exports = {tweet}
