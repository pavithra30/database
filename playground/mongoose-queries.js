const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

/*var id='5aeff6a22992b94a68229273';

Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos',todos);
});

 Todo.findOne({
   _id: id
 }).then((todo)=>{
   console.log('Todo',todo);
 });

 Todo.findById(id).then((todo)=>{
   console.log('todo By id', todo);
 });*/

  User.find ('5aebef42f69d4c1307b8d0af').then((user)=>{
    if(!user){
      return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user,undefined,2));
  },(e)=>{
    console.log(e);
  });
