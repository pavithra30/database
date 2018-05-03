const {MongoClient,ObjectID} =require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongode server');
/*db.collection('Todos').findOneAndUpdate({
  _id:new ObjectID('5aea97a3c0dc9b0d7d6f6dbf')
},{
  $set:{
    completed: true
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});*/
db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5aea9917463d4d139a1be614')
},{
  $set:{
    name:'pavithra'
  },$inc:{
    age:1
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});
  db.close();
});
