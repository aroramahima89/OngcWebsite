const mongoose=require("mongoose");

const bdaySchema =new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        minLength:3
    },
    url:{
        type:String,
        required:true
    }
},{collection:'Bday'})
    
const Bday=mongoose.model("Bday",bdaySchema);
module.exports=Bday;