const mongoose=require("mongoose");

const pdfSchema =new mongoose.Schema({
   pdfUrl:{
    type:String,
    required:true
   }
},{collection:'HighLights'})
    
const HighLights=mongoose.model("HighLights",pdfSchema);
module.exports=HighLights;