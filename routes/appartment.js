const express = require('express');
const {Router} = require('express');
const appartmentRouter = Router();
const {getAllAppartments, getAppartment,deleteAppartment,
    updateAppartment,addAppartment} = require('../controllers/appartment')

appartmentRouter.get('/', getAllAppartments)
appartmentRouter.put('/:id', updateAppartment)
appartmentRouter.get('/:id', getAppartment)
appartmentRouter.post('/', addAppartment)
appartmentRouter.delete('/:id', deleteAppartment)





module.exports = appartmentRouter;


