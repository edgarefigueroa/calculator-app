const express = require('express')
const app = express()

app.use(express.json())

// endpoint for index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
    rollbar.info('Welcome to Duel Duo')
})

// endpoint for index.js 
app.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, '/script.js'))
    
  })

// middleware 
app.use("/styles", express.static(path.join(__dirname, "./style.css")));


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})