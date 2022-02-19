// Third party
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// Setup
import './module-alias.config'

// Local
import Express from '@/loaders/Express'

dotenv.config()

const app = express()

// config
app.use(cors)

new Express(app).init()