const express = require('express');
const appartmentRoute = require('./routes/appartment')
require('./db/connect');
require('dotenv').config()

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
