const express = require('express');
const {Router} = require('express');
const contactRoute = Router();
const {addContact, getallContact,getContact} = require('../controllers/contact')



contactRoute.post('/', addContact)
contactRoute.get('/', getallContact)
contactRoute.post('/', getContact)




module.exports = contactRoute;