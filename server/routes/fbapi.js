const express = require('express')
const router =  express.Router()
// require('dotenv').config()
const FB = require('fb'),
      fb = new FB.Facebook({version: 'v2.10'})

// var Shyf = FB.extend({appId: process.env.APP_ID, appSecret: process.env.APP_SCRT})

// var setAccessToken = (req, res, next) => {
//   console.log(req.headers.fbaccesstoken,'=====');
//   FB.setAccessToken(req.headers.fbaccesstoken);
//   next()
// }


FB.setAccessToken('EAAMjyqAEIAMBAFepJrT9wfeCAQSBZAWUpouXD6XkwBwpedzuc…N50CIc02azDKTrFO7qXJFsiqQsH4jtUXuXk7BLZCM0KLgZDZD')
router.post('/postfb', (req, res) => {
  FB.api('me/feed', 'post', {
    message:req.body.message
  }, (err,result) => {
    if (err) {
      res.send(err)
    } console.log('this is result post: ', result);
    res.send(result)
  })
})

module.exports = router
