const mongoose = require('mongoose');
require('dotenv').config()

const connectionString =process.env.MONGO_URI;

mongoose
    .connect(connectionString)
    .then(()=>console.log('Connected to Database successfully'))
    //.then((error)=> console.log(error))
  
  

/*
const connectDB = (url)=>{
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false,
        useUnifiedTopology:true
    
    })
}

module.exports = connectDB;
*/
