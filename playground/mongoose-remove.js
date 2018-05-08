const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');



/*Todo.remove({}).then((result)=>{
  console.log(result);
});*/


Todo.findOneAndRemove({_id:'5af02485cb696536e25a3658'}).then((todo)=>{

});

Todo.findByIdAndRemove('5af02485cb696536e25a3658').then((todo)=>{
  console.log(todo);
})
