const express = require('express');
const cors=require("cors");
const bodyParser=require("body-parser");
const app = express();
const Bday=require("./models/Bday");
const HighLights=require("./models/HighLights");
const mongoose = require("mongoose");

//storing port
const port=process.env.PORT || 3001;
// connecting to the database
require('./db/conn');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get('/', (req , res) => {
  const da=new Date();
  let m=da.getMonth();
  m=m+1;
  const d=da.getDate();
   Bday.find({
      $and:[
        {"date":`${d}`},
        {"month":`${m}`}
      ]  
    })
  .then((data)=>{
    const [posts] = data;
 if (posts===undefined) {
      return res.status(404).json({"name":"No bday today","url":"images/smiley.jfif"});
    }
    res.status(200).json(data[0]);
  })
  .catch((err) => res.status(500).json(`${err}`));
});

app.get("/pdf",(req,res)=>{
  HighLights.find()
  .then(data=>
    res.status(200).json(data))
    .catch(err=>
      res.status(404).json(err));
})

app.listen({port},()=>{
  console.log( `server running...${port}`);
})

/*router.get("/",(req,res)=>{
    const da=new Date();
    const m=da.getMonth();
    const d=da.getDate();
     Bday.find()
    .then((data)=>{
      console.log(`data ${data}`)
      res.json(data)
    })
    .catch(err=>console.log("err here"));
    
  
 //   Website.getCollection('Bday').aggregate([
  /*    Bday.aggregate([
        { 
          $match: {
            $expr: {
              $and: [
                { $eq: [{ $dayOfMonth: '$birthDate' }, { $dayOfMonth: new Date() }] },
                { $eq: [{ $month: '$birthDate' }, { $month: new Date() }] },
              ],
            },
          }
        }
      ])
      .then((data) => {
            const { posts } = data;
            console.log("hi");
            console.log(data);
            console.log({posts});
            if (!posts.length) {
              console.log("hii");
             return res.status(404).json('data');
            }
            console.log("hello");
            res.status(200).json('data');
           })
           .catch((err) => res.status(500).json({err}));
          
}) */ 

//app.use(require('./routes/usersRoute'));
