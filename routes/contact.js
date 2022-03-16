const express = require('express');
const {Router} = require('express');
const contactRoute = Router();
const {addContact, getallContact,getContact,deleteContact, updateContact} = require('../controllers/contact')


contactRoute.get('/:id', getContact)
contactRoute.post('/', addContact)
contactRoute.put('/:id', updateContact)
contactRoute.get('/', getallContact)
contactRoute.delete('/:id', deleteContact)




module.exports = contactRoute;