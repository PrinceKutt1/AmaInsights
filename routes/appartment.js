const express = require('express');
const {Router} = require('express');
const appartmentRouter = Router();
const {getAllAppartments, getAppartment,deleteAppartment,
    updateAppartment} = require('../controllers/appartment')

appartmentRouter.get('/', getAllAppartments)
appartmentRouter.post('/', updateAppartment)
appartmentRouter.get('/:id', getAppartment)
appartmentRouter.delete('/:id', deleteAppartment)





module.exports = appartmentRouter;


/*envelopeRouter.get('/', controllers.getEnvelope);
envelopeRouter.post('/', controllers.addEnvelope);
envelopeRouter.get('/:id', controllers.getEnvelopeById);
envelopeRouter.put('/:id', controllers.updateEnvelope);
envelopeRouter.delete('/:id', controllers.deleteEnvelopeById);*/