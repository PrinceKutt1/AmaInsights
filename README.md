![The Wells Resort](./client/Images/readmeImag.jpeg)
![Our Activities](readmeImg.jpeg)

<div align="center">
    <img src="client/Images/readmeImag.jpeg" width="400px"</img> 
</div>
# AmaInsight project
AmaInsight project is a full application which primarily focused on a Node/Express API that serve a landing page of a Resort Website in order to track user activities using Google Analytics. The API allows Users to perform the CRUD(Create, Read, Update and Delete) operations on two objects namely Contact and Appartments. All data is persisted in a database using MongoDB. 

## Running the app
To run locally, run npm install, then ```node index``` you can install nodemon after installing the depencies for easy running of the application.

Once the app is running locally, you can access the API at http://localhost:3000/


## Testing the app
Tests for endpoints have been written with #Mocha and #chai. 
To run the test, run ```npm run test```

## Testing with Swagger
Swagger documentation and testing available at http://localhost:3000/api/v1/api-docs

### These are the endpoints
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

-Create an appartment using POST /api/v1/appartment


[The project is deployed on Heroku. Click on link for live project](https://amainsight.herokuapp.com/)
