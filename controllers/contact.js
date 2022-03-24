const mongoose = require('mongoose');
const Contact = require('../models/contact')


const getContact = async (req,res) =>{
    try{
      const {id: contactID} = req.params
      const contact = await Contact.findOne({_id:contactID})

      //for incorrect ID
      if(!contact){
          return res.status(404).json({msg: `No contact with ${contactID}`})
        }
 res.status(200).json({contact })
    }
    catch(error){

        res.status(500).json({message : error})
    }
}



const addContact = async (req,res)=>{
    try{
        
        const contact = await Contact.create(req.body)

    res.status(200).json({msg:"Contact successfully added!", contact})
}catch(err){
    res.status(500).json({msg:err})
}
    }
    



const getallContact = async (req, res)=>{
    try{
        //store all documents in Contact to contacts 
      const contacts = await Contact.find({})
      res.status(200).json({contacts})
    }
    catch(error){
        res.status(500).json({message : error})

    }
}



const deleteContact = async (req,res)=>{
    try{

      const {id: contactID} = req.params
      const contact = await Contact.findOneAndDelete({_id:contactID})
      //for incorrect ID
      if(!contact){
        return res.status(404).json({msg: `No contact with ${contactID}`})
      }
      res.status(200).json({contact})

    }
    catch(error){
        res.status(500).json({msg:error})

    }
}

const updateContact = async (req,res)=>{
    try{
        const {id: contactID} = req.params
        const contact = await Contact.findByIdAndUpdate({_id:contactID}, req.body, {
            new:true,
            runValidators:true
        });
        if(!contact){
            return res.status(404).json({msg: `No contact with ${contactID}`})
        }
        res.status(200).json({contact})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}



module.exports = {addContact, getallContact,getContact, deleteContact, updateContact};