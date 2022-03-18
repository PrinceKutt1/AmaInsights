const express = require('express');
const {Router} = require('express');
const appartmentRouter = Router();
const {getAllAppartments,
    getAppartment,
    deleteAppartment,
    updateAppartment,
    addAppartment} = require('../controllers/appartment')


/**
 * @swagger
 * /api/v1/appartment:
 *    get:
 *      summary: Get all appartments
 *      produces:
 *        - application/json
 *      tags:
 *        - Appartment
 *      responses:
 *        "200":
 *          description: Returns a list of all appartments
 *
 */

appartmentRouter.get('/', getAllAppartments)



/**
 * @swagger
 * /api/v1/appartment/{id}:
 *    put:
 *      summary: Updates an existing appartment
 *      produces:
 *        - application/json
 *      tags:
 *        - Appartment
 *      parameters:
 *        - in: path
 *          name: id
 *          description: appartment ID
 *          type: Number
 *          required: true
 *          example: 0xff
 *      requestBody:
 *        description: Data for new appartment
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                type_of_room:
 *                  type: string
 *                description:
 *                  type: string
 *              example:
 *                type_of_room: Single room
 *                description: A single has a space suitable for an individual
 *      responses:
 *        "200":
 *          description: Returns updated appartment
 *        "404":
 *          description: Appartment not found
 *        "500":
 *          description: Internal server error
 */
appartmentRouter.put('/:id', updateAppartment)




/**
 * @swagger
 * /api/v1/appartment/{id}:
 *    get:
 *      summary: Get an appartment by ID
 *      produces:
 *        - application/json
 *      tags:
 *        - Appartments
 *      parameters:
 *        - in: path
 *          name: id
 *          description: appartment id
 *          type: Number
 *          required: true
 *          example: 0xfff
 *      responses:
 *        "200":
 *          description: Returns a an appartment along with its data
 *
 *        "500":
 *          description: Internal server error
 */
appartmentRouter.get('/:id', getAppartment)

/**
 * @swagger
 * /api/v1/appartment:
 *    post:
 *      summary: Creates a new appartment
 *      produces:
 *        - application/json
 *      tags:
 *        - Appartment
 *      requestBody:
 *        description: Data for new appartment
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                type_of_room:
 *                  type: string
 *                description:
 *                  type: string
 *              example:
 *                type_of_room: Single room
 *                description: A single has a space suitable for an individual
 *      responses:
 *        "200":
 *          description: Returns updated appartment
 *        "404":
 *          description: Appartment not found
 *        "500":
 *          description: Internal server error
 */

appartmentRouter.post('/', addAppartment)

/**
 * @swagger
 * /api/v1/appartment/{id}:
 *    delete:
 *      summary: Deletes an individual appartment
 *      produces:
 *        - application/json
 *      tags:
 *        - Appartment
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Appartment ID to delete
 *          type: Number
 *          required: true
 *          example: 0xff
 *      responses:
 *        "200":
 *          description: Appartment deleted
 *        "500":
 *          description: Internal server error
 *        "404":
 *          description: Envelope not found
 */



appartmentRouter.get('/', getAllAppartments)

module.exports = appartmentRouter;


    