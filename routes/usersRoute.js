/*const express=require("express");
const app=express();
const Bday=require("../models/Bday");


app.get("/",(req,res)=>{
    const da=new Date();
    const m=da.getMonth();
    const d=da.getDate();
     Bday.aggregate(
             [
              {
                $project:
                  {
                    month: { $month: `${m}` },
                    day: { $dayOfMonth: `${d}` },
                  }
              }
            ]
         )
        .then(found=>res.json(found))
        .catch(err=>console.log(err));
})

module.exports=app;
*/
const express = require('express');
const router = express.Router();

require("../db/conn");
const Bday=require("../models/Bday");

router.get('/', (req , res,next) => {
    res.json("hii");
});

router.get('/bday/', (req , res,next) => {
  res.json("hiitrbbtteb");
});

module.exports=router;