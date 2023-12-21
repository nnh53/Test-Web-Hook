import { Router } from 'express'

const webhook = Router()

webhook.get('/', (req, res) => {
  console.log(req)

  const mode = req.query['hub.mode']
  const token = req.query['hub.verify_token']
  const challenge = req.query['hub.challenge']

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === 'subscribe' && token === 'ahihi') {
      // Respond with the challenge token from the request
      console.log('WEBHOOK_VERIFIED')
      res.status(200).send(challenge)
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403)
    }
  }
  // res.json({ message: 'hello webhook' })
})

webhook.post('/', (req, res) => {})

export default webhook
