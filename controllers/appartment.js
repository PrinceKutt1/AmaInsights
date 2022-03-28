const mongoose = require('mongoose');
const Appartment = require('../models/appartment')


const getAppartment = async (req,res) =>{
    try{
        //destructuring req.params
      const {id: appartmentID} = req.params
      const appartment = await Appartment.findOne({_id:appartmentID})

      //for incorrect ID, ID with same syntax
      if(!appartment){
          return res.status(404).json({msg: `No contact with ${appartmentID}`})
        }
 res.status(200).json({appartment})
    }
    catch(error){

        res.status(500).json({message : error})
    }
}


const addAppartment = async (req,res)=>{
    try{
        
        const appartment = await Appartment.create(req.body)

    res.status(200).json({msg: 'Appartment successfully added!', appartment})
}catch(err){
    res.status(500).json({message : err})
}
    }
    



const getAllAppartments = async (req, res)=>{
    try{
        //store all documents in Appartment to appartments 
      const appartments = await Appartment.find({})
      res.status(200).json({appartments})
    }
    catch(error){
        res.status(500).json({message : error})

    }
}



const updateAppartment = async (req,res)=>{
    try{
        const {id: appartmentID} = req.params
        const appartment = await Appartment.findByIdAndUpdate({_id:appartmentID}, req.body, {
            //retruns validated items 
            new:true,
            runValidators:true
        });
        if(!appartment){
            return res.status(404).json({msg: `No appartment with ${appartmentID}`})
        }
        res.status(200).json({msg :'Contact successfully Updated!', appartment})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}




const deleteAppartment = async (req,res)=>{
    try{

      const {id: appartmentID} = req.params
      const appartment = await Contact.findOneAndDelete({_id:appartmentID})
      //for incorrect ID
      if(!appartment){
        return res.status(404).json({msg: `No appartment with ${appartmentID}`})
      }
      res.status(200).json({msg :'Appartment successfully deleted!', appartment})

    }
    catch(error){
        res.status(500).json({msg:error})

    }
}
/* This logic works best for PUT menthod
const editAppartment = async (req,res)=>{
    try{
        const {id: appartmentID} = req.params
        const appartment = await Appartment.findByIdAndUpdate({_id:appartmentID}, req.body, {
            //retruns validated items 
            new:true,
            runValidators:true,
            overwrite: true
        });
        if(!appartment){
            return res.status(404).json({msg: `No appartment with ${appartmentID}`})
        }
        res.status(200).json({appartment})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

*/




module.exports ={
    getAllAppartments,
    getAppartment,
    deleteAppartment,
    updateAppartment,
    addAppartment
}
