const express = require('express')
const clientsController = require('../controllers/clients')
const router = express.Router()

router.get('/', clientsController.getAllClients)

// router.get('/:id', usersController.getClientById)

// router.post('/', usersController.createClient)

// router.put('/:id', usersController.updateClientById)

// router.delete('/:Client', usersController.deleteClientByName)

module.exports = router