const {MongoClient,ObjectID} =require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongode server');
db.collection('Todos').find({
  _id:new ObjectID('5aea97a3c0dc9b0d7d6f6dbf')}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('unable to find toods',err);
  });

  db.collection('T Todos').find().count().then((count)=>{
    console.log(`Todo count: ${count}`);
  },(err)=>{
    console.log('unable to fetch todos',err);
  });

  db.collection('Users').find({name:'pavithra'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  });


  db.close();
});
