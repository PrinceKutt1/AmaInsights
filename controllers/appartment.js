/*const mongoose = require('mongoose');
const Appartment = require('../models/appartment')


const getAppartment = async (req,res) =>{
    try{
      const {id: contactID} = req.params
      const contact = await Contact.findOne({_id:contactID})
    }
    catch(error){

    }
}



const addAppartment = async (req,res)=>{
    try{
        
        const contact = await Contact.create(req.body)

    res.status(201).json({contact})
}catch(err){
    res.status(500).json({message : err})
}
    }
    



const getallAppartment = async (req, res)=>{
    try{
        //store all documents in Contact to contacts 
      const contacts = await Contact.find({})
      res.status(200).json({contacts})
    }
    catch(error){
        res.status(500).json({message : err})

    }
}




module.exports = {addAppartment, getallAppartment,getAppartment};


const updateAppartment =(req,res)=>{
    res.send('Get an Appartment')
}




const deleteAppartment =(req,res)=>{
    res.send('Get an Appartment')
}



module.exports ={
    getAllAppartments,
    getAppartment,
    deleteAppartment,
    updateAppartment,
    addAppartment
}
*/