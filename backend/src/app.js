const express = require('express')
require('dotenv').config()
const APP = express()
const PORT =  process.env.PORT

APP.get('/',(request, response) => {
    response.json()
})

APP.listen(PORT,() => {
    console.log(`servidor corriendo ${process.env.PORT}`)
}   

)