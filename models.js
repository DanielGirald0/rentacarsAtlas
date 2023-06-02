const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario',
    new mongoose.Schema({nombre: String, apellido: String})
)

module.exports = {
    Usuario
}