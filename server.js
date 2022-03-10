const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/database')
dotenv.config()

connectDB();

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('API is running....')
})

  
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on PORT ${PORT} `)
})