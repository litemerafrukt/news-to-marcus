const cors = require('micro-cors')()
const fetch = require('node-fetch')

const handler = async (req, res) => {
  newsfeed_res = await fetch('https://live.givedirectly.org/newsfeed.json')
  newsfeed = await newsfeed_res.json()
  return newsfeed
}

module.exports = cors(handler)
