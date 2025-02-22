const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()

// Middleware to parse JSON bodies and enable CORS
app.use(express.json())
app.use(cors())  // Allows cross-origin requests (needed for local development)

// Endpoint to handle contact form submissions
app.post('/server/data.json', (req, res) => {
  try {
    // Read existing data from data.json
    const data = JSON.parse(fs.readFileSync('./data.json'))
    
    // Add the new form submission to the array
    data.push(req.body)
    
    // Write the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
    
    // Send a success response
    res.status(200).send('Success')
  } catch (error) {
    console.error('Error processing request:', error)
    res.status(500).send('Internal Server Error')
  }
})

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000')
})