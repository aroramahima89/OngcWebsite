const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://aroramahima89:Mahima89@cluster0.e6uwy.mongodb.net/Website",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
})