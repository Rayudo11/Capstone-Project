const express = require('express')
const consultationsController = require('../controllers/consultations')
const router = express.Router()

router.get('/', consultationsController.getConsultations)

// router.get('/:id', usersController.getClientById)

// router.post('/', usersController.createClient)

// router.put('/:id', usersController.updateClientById)

// router.delete('/:Client', usersController.deleteClientByName)

module.exports = router