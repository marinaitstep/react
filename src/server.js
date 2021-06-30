// import cors from 'cors';
// const server = express();
// server.use(cors());
var express = require('express');
var app = express();
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb+srv://admin:1qazxsw234@cluster0.3cmli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true });
app.post('/', function (req, res) {

mongoClient.connect(function(err, client){
   
    const db = client.db("FamilyMoney");
    const collection = db.collection("users");
    
    
    if(err) return console.log(err);
     collection.find({login: "marina", password: "1234"}).toArray(function(err, results){
             res.send(results);      
         console.log(results);
         
        client.close();
        });
    });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

