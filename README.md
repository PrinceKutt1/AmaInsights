# AmaInsight project
Simple Node/Express API to serve a landing page in oder to track user activities using Google Analytics. The API allows Users to create, read, update, and delete Contact as well as create Appartments for each individual. All data is persisted in a database using MongoDB

## Running the app
To run locally, run npm install, then npm start

Once the app is running locally, you can access the API at http://localhost:3000/

## Testing with Swagger
Swagger documentation and testing available at http://localhost:3000/api/v1/api-docs

To test with Swagger:

### Contact:
----
-Retrieve contacts using GET /api/v1/contacts

-Retrieve a single contact using GET /api/v1/contact/{id}

-Create a contact using POST /api/v1/contact

-Update a contact using PUT /api/v1/contact/{id}

-Delete a contact using DELETE /api/v1/contact/{id}


### Appartment:
----
-Retrieve appartments using GET /api/v1/appartments

-Retrieve a single appartment using GET /api/v1/appartments/{id}

-Update an appartment using PUT /api/v1/appartments/{id}

-Delete an appartment using DELETE /api/v1/appartment/{id}

-Create an appartment using POST /api/v1/appartment/{id}


[The project is deployed on Heroku. Find the link here](https://amainsight.herokuapp.com/)
