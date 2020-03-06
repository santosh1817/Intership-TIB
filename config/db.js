const mongoose=require('mongoose')
const MongoClient = require("mongodb").MongoClient;
const config=require('config')
const db=config.get('mongoURI')
mongoose.Promise=global.Promise

var database, collection;
mongoose.connect(db,{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true})
    .then(function(){
        console.log('connected to db')
        // database = client.db(DATABASE_NAME);
        // collection = database.collection("people");
        // console.log("Connected to `" + DATABASE_NAME + "`!");
    })
    .catch(function(err){
        console.log('error connecting to db',err)
    })

module.exports={

    mongoose
}