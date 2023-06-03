const cors       = require('cors')
const express    = require('express')
const controller = require('./controllers')
const router     = express.Router()

// --------------------------------API REST CRUD-----------------------------------------------
//Usuarios

router.get      ("/Usuarios",       cors(), controller.readUsers) //Leer todos los usuarios 
router.get      ("/Usuarios/:id",   cors(), controller.readUser) //Leer usuario por id 
router.delete   ("/Usuarios/:id",   cors(), controller.deleteUser) //Eliminar usuario por id 
router.put      ("/Usuarios/:id",   cors(), controller.updateUser) //editar usuario por id 
router.post     ("/Usuarios",       cors(), controller.createUser) //crear usuario

module.exports = router

//Carros

//Rentas
