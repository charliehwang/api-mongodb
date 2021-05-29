import express from 'express'
import { connect } from './utils/db'
import config from './config'

export const app = express()

app.get('/', (req, res) => {
  return res.json({message: 'ok'})
})

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}