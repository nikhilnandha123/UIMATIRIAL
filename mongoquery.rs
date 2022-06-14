//show all database
show dbs

//create database
use rku

//all the collections are show
show collections

//data show
db.rku.find()

//data show in formeting
db.rku.find().pretty()

//create collection
db.createCollection("rku")

//insert collection
db.rku.insert({name:"jay",branch:"mca",age:21})

db.rku.insertMany(
    [
       {name:"raj",sem:2,branch:"MCA",grade:"A",mobile:9988776655,address:{building_name:"C",street:3,land_mark:"rajkot",pincode:360020},"city":"Rajkot"},
       {name:"magan",sem:2,branch:"MCA",grade:"A",mobile:8866442233,address:{building_name:"C",street:3,land_mark:"rajkot",pincode:360020},"city":"baroda"},
       {name:"ram",sem:2,branch:"MCA",grade:"B",mobile:8980232342,address:{building_name:"A",street:3,land_mark:"rajkot",pincode:360020},"city":"keshod"},
       {name:"madhav",sem:2,branch:"MCA",grade:"B+",mobile:8980223344,address: {building_name:"B",street:3,land_mark:"rajkot",pincode:360020},"city":"Rajkot"},
       {name:"chagan",sem:2,branch:"MCA",grade:"C",mobile:8866443322,address:{building_name:"A",street:3,land_mark:"rajkot",pincode:360020},"city":"surat"}
    
    ]    
)

//update data aa query thi khali ak j update thase
db.stud.update({name:raj},{$set:{name:dev}})

//vadhare data update karva mate
db.stud.updateMany({name:raj},{$set:{name:dev}})

//upsert aa no use data hase to update thase and nai hoy to insert thai jase ok
db.stud.update({name:raj},{$set:{name:dev}},{upsert:true})

//delete 
db.rku.deleteOne({name:"raj"})

db.rku.deleteMany({})

db.rku.drop()

//output with status equals "B"
db.rku.find({branch:"mca"}).pretty()

//output with name field only
db.rku.find({branch:"MCA"},{name:1}).pretty()

//output without id aetle k id na aavu joye
db.rku.find({branch:"MCA"},{name:1,_id:0}).pretty()

//find filter to "active:true" and get only the first filed with "active:true" values
db.rku.find({Active:true}).limit(1)

//set the filter to “active :ture” and get only the first field with “active : true” value by skipping the 1st  field
db.rku.find({Active:true}).skip(1).limit(1)

//Retrieves all documents from the inventory collection where status equals either "A" or "D".
db.rku.find({branch:MCA,grade:"A"})

//Retrieve documents in the inventory collection where the status equals "A" and qty is less than ($lt (Links to an external site.)Links to an external site.) 30
db.rku.find({$or:[{branch:"MCA"},{grade:{$lt:B}}]})

//rename collection
db.stud.renameCollection("Mark")

//m thi name chalu thatu hoy to
db.stud.find({name:{$regex:/^m/}})

//chhele m aavtu hoy to
db.stud.find({name:{$regex:/m$/}})

//vachhe game tya lin aavtu hoy to
db.stud.find({name:{$regex:/lin/}})

//line m thi start thati hoy to
db.stud.find({name:{$regex:/m/,$option:"si"}})

//json data puchay to tene import karva mate
mongoimport --db databasename --collection res --file D:\restaurants.json




//node mate have

//aa code GETAPI mate no chhe
//model folder ni andar movies.js name ni file no code

var mongoose = require('mongoose');

var studSchema = mongoose.Schema({
    name:String,
    city:String,
    pin:String,
    branch:String
})

module.exports = mongoose.model("studs",studSchema);

//aa index.js file no code chhe

// var mongoose = require('mongoose');
// var express = require('express');
// var bodyParser = require('body-parser');
// var route = require('./route');

// mongoose.connect("mongodb+srv://devang:devang7492@cluster0.hchkg.mongodb.net/Student?retryWrites=true&w=majority").then(()=>{
// console.log("conncted");
// app = express();
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:false}))
// app.use('/api',route)

// app.listen(3004,()=>{
//     console.log("Server Running")
// })
// }).catch((err)=>{
//     console.log(err);
// })

//aa code rout.js mate no chhe

var express = require('express');
const movie = require('./model/movie');
var stud = require('./model/movie')
var route = express.Router();


route.get('/stud',async(req,res)=>{
  var imovie = await stud.find();
  res.send(imovie);

})
module.exports = route;


//aa code POSTAPI mate no chhe

//model folder ni andar movies.js name ni file no code

var mongoose = require('mongoose');

var studSchema = mongoose.Schema({
    name:String,
    rating:Number
})

module.exports = mongoose.model("movie",studSchema);

//index.js mate no

// var mongoose = require('mongoose');
// var express = require('express');
// var bodyParser = require('body-parser');
// var route = require('./route');

// mongoose.connect("mongodb+srv://devang:devang7492@cluster0.hchkg.mongodb.net/Student?retryWrites=true&w=majority").then(()=>{
// console.log("conncted");
// app = express();
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:false}))
// app.use('/api',route)

// app.listen(3004,()=>{
//     console.log("Server Running")
// })
// }).catch((err)=>{
//     console.log(err);
// })

//route.js mate no

var express = require('express');
var movie = require('./model/movie')
var route = express.Router();


route.get('/movie',async(req,res)=>{
  var imovie = await movie.find();
  res.send(imovie);

})
route.post("/movie",async(req,res)=>{
  const imovie = new movie({
    name:req.body.name,
    rating:req.body.rating
  })
  console.log(imovie)
  await imovie.save((err,msg)=>{
    if(err){
      res.status(500).json({
          "error":err
      })
  }
  else{
      res.status(200).json({
          "My-message":msg
      })
  }
  })
})
module.exports = route;


//KOi JAT NA SAVAL KARVA NAI AME AVDI MENAT KARI  NE TAMARA SATU BANAVI CHHE OKKKKKK PLEASEEEEEEE 