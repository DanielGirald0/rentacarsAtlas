require('dotenv').config();
var cors        = require('cors')
const express   = require('express')
const mongoose  = require('mongoose')
const apiRoutes = require('./routes')

const app  = express()
const port = process.env.PORT || 3200

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a la base de datos de MongoDB Atlas"))
    .catch(() => console.error("Error de conexión a la base de datos"))

app.use(cors())
app.use(express.json())
app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
})
