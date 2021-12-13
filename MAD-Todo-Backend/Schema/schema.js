import mongoose from 'mongoose';
const {Schema, model} = mongoose;




// Destructuring
// use Schema to structure the data in the DB
const todoSchema = Schema({
    todoTitle:{
type:String,
requred:true
    },
category:{
type:String,
required:true
},

})
const todoModel = model('todo',todoSchema);
export default todoModel;
