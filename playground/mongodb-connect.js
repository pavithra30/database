const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongode server');
/*db.collection('Todos').insertOne({
  text:'my name is pavi',
  completed:false
},(err,result)=>{
  if(err){
    return console.log('unable to insert todo',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});*/
db.collection('Users').insertOne({
  name:'pavi',age:22,location:'hosur'
},(err,result)=>{
  if(err){
    return console.log('unable to insert user',err);
  }
  console.log(result.ops);
}); 


  db.close();
});
