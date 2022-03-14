const getAllAppartments = (req,res)=>{
    res.send('List of all the appartments')
}



const getAppartment =(req,res)=>{
    res.send('Get single Appartment')
}


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
    updateAppartment
}