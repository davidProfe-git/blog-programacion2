const express = require('express')
require('dotenv').config()
const cors = require('cors')
const RecetasRouter = require('./routes/recetasRoutes')
const APP = express()
const PORT =  process.env.PORT
APP.use(cors())
APP.get('/',(request, response) => {
    response.json({
        mensaje: "Funciona mi API"
    })
})

APP.use('/api/recetas',RecetasRouter)

APP.listen(PORT,() => {
    console.log(`servidor corriendo ${process.env.PORT}`)
}   

)