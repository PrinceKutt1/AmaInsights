const express = require('express');
const appartmentRoute = require('./routes/appartment')
require('./db/connect');
require('dotenv').config()

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const contactRoute = require('./routes/contact')
const path = require('path');
const app = express()

//middleware to allow retrival of data from req.body etc.
app.use(express.json());



app.use(express.static('client'));
app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.use('/api/v1/appartment', appartmentRoute)
app.use('/api/v1/contact', contactRoute)

const PORT = process.env.PORT || 3000;


// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "AmaInsight API",
      description: "AmaInsight API Information",
      contact: {
        name: "Prince Wells"
      },
      servers: ["http://localhost:3000"]
    }
  },
  
  apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
//using swaggerUi to serve the documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));




app.listen(PORT, ()=>{
    
    console.log(`App is running on port:  ${PORT}`)
});


/*
const startServer = async ()=>{
  try{

    //start server if db connection is successful
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, ()=>{
    
      console.log(`App is running on port:  ${PORT}`)})

  }catch(err){
    console.log(err)

  }
} 


startServer()
*/
