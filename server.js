import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/database.js'
import routes from './routes/v1/index.js'
dotenv.config()

connectDB()

const app = express()
app.use(cors())

app.use('/v1', routes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on PORT ${PORT} `)
})
