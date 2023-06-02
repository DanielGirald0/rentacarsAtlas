require('dotenv').config();
var cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const rentRoutes = require('./routes/rent')
const carRoutes = require('./routes/car')

const app = express()
const port = process.env.PORT || 3200

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a la base de datos de MongoDB Atlas"))
    .catch(() => console.error("Error de conexión a la base de datos"))

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("hola")
})

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
})
