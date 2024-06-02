const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
connectToMongo();

const app = express()
const port = 5000
app.use(cors())

app.use(express.json())// To use json on body
// Available Routes 
app.use('/api/auth',require('./routes/auth')) // Use to connect routes
app.use('/api/notes',require('./routes/notes'))// Use to connect routes


app.listen(port, () => {
  console.log(`Backend Server listening on port http://localhost:${port}`)
})