const path = require('path')
const express = require('express')
const pubPath = path.join(__dirname, '/../public')
const port = process.env.PORT || 3000
const app = express();
app.use(express.static(pubPath))

app.listen(port, () => {
    console.log(`Server is running on port number ${port}`)
})