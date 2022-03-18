const express = require('express');
const {Router} = require('express');
const contactRoute = Router();
const {addContact, getallContact,getContact,deleteContact, updateContact} = require('../controllers/contact')





/**
 * @swagger
 * /api/v1/contact/{id}:
 *    get:
 *      summary: Get a contact by ID
 *      produces:
 *        - application/json
 *      tags:
 *        - Contacts
 *      parameters:
 *        - in: path
 *          name: id
 *          description: contact id
 *          type: Number
 *          required: true
 *          example: 0xfff
 *      responses:
 *        "200":
 *          description: Returns a an contact along with its data
 *
 *        "500":
 *          description: Internal server error
 */

contactRoute.get('/:id', getContact)

/**
 * @swagger
 * /api/v1/contact:
 *    post:
 *      summary: Creates a new contact
 *      produces:
 *        - application/json
 *      tags:
 *        - Contacts
 *      requestBody:
 *        description: Data for new contact
 *        required: false
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *              example:'prince@gmail.com'
 *      responses:
 *        "200":
 *          description: Returns created contact
 *        "500":
 *          description: Internal server error
 */

contactRoute.post('/', addContact)

/**
 * @swagger
 * /customers:
 *    put:
 *      description: Use to return all contacts
 *    parameters:
 *      - name: email
 *        in: query
 *        description: Email address
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '20o':
 *        description: Successfully created user
 */
contactRoute.put('/:id', updateContact)
/**
 * @swagger
 * /api/v1/contact:
 *    get:
 *      summary: Get all contacts
 *      produces:
 *        - application/json
 *      tags:
 *        - Contact
 *      responses:
 *        "200":
 *          description: Returns a list of all contacts
 *
 */
contactRoute.get('/', getallContact)

/**
 * @swagger
 * /api/v1/contact/{id}:
 *    delete:
 *      summary: Deletes an individual contact
 *      produces:
 *        - application/json
 *      tags:
 *        - contact
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Contact ID to delete
 *          type: Number
 *          required: true
 *          example: 0xff
 *      responses:
 *        "200":
 *          description: Contact deleted
 *        "500":
 *          
 */

contactRoute.delete('/:id', deleteContact)




module.exports = contactRoute;