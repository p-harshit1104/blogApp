const mongoose = require("mongoose");

//route schema
const postSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   body:{
    type:String,
    required:true
   },
   likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Like"
   }],
   comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment"
   }] 
});

// Model for the Post collection
module.exports = mongoose.model("Post", postSchema);
 