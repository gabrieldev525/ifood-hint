// Third party
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// Setup
import './module-alias.config'

// Local
import Express from '@/infra/loaders/Express'
import Routes from '@/routes'

dotenv.config()

const app = express()

app.get('/', (req, res) => res.send('teste123'))

// config
new Routes(app).init()

app.use(express.json())
app.use(cors)


new Express(app).init()