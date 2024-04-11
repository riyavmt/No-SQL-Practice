const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback)=>{
    MongoClient.connect('mongodb+srv://riyavmt14:RiyaCluster001@cluster0.zywa9aq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client=>{
        console.log("Connected");
        _db = client.db()
        callback(client)
    })
    .catch((err)=>{
        console.log(err);
        throw err;
    });
}

const getDb = ()=>{
  if(_db){
    return _db
  }
  throw "No database found"
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
