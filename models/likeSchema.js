const mongoose = require("mongoose");

//route schema
const likeSchema = new mongoose.Schema({
   post:{                       // which post u r like
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post",  //reference to post model
   },
   user:{                       //which user is liking
    type:String,
    require:true,
   },
  
});

// Model for the Post collection
module.exports = mongoose.model("Like", likeSchema);
 