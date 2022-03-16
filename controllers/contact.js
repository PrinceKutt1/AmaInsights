const mongoose = require('mongoose');
const Contact = require('../models/contact')


const getContact = async (req,res) =>{
    try{
      const {id: contactID} = req.params
      const contact = await Contact.findOne({_id:contactID})
    }
    catch(error){

    }
}



const addContact = async (req,res)=>{
    try{
        
        const contact = await Contact.create(req.body)

    res.status(201).json({contact})
}catch(err){
    res.status(500).json({message : err})
}
    }
    



const getallContact = async (req, res)=>{
    try{
        //store all documents in Contact to contacts 
      const contacts = await Contact.find({})
      res.status(200).json({contacts})
    }
    catch(error){
        res.status(500).json({message : err})

    }
}




module.exports = {addContact, getallContact,getContact};