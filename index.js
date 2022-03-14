const express = require('express');
const appartmentRoute = require('./routes/appartment')
const path = require('path');
const app = express()

//middleware to allow forjson data.
app.use(express.json());



app.use(express.static('client'));
app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.use('/api/v1/appartment', appartmentRoute)





/*app.get('*', (req, res)=> {
    const index = path.join(__dirname, '/', '/client', 'index.html');
    res.sendFile(index);
  });*/





const PORT = process.env.PORT || 3000;




app.listen(PORT, ()=>{
    
    console.log(`App is running on port:  ${PORT}`)
});