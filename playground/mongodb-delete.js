const {MongoClient,ObjectID} =require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongode server');
//deleteMany
db.collection('Todos').deleteMany({ text:'Eat lunch'}).then((result)=>{
  console.log(result);
});

//deleteOne
db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  console.log(result);
});
//findOneAndDelete
db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  console.log(result);
});

  db.close();
});