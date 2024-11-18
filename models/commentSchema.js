const mongoose = require("mongoose");

// Define the comment schema
const commentSchema = new mongoose.Schema({
   post: {  // Which post the comment is for
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",  // Reference to the Post model
   },
   user: {  // Which user is commenting
      type: String,
      required: true,
   },
   body: {  // The content of the comment
      type: String,
      required: true,
   },
});

// Export the Comment model
module.exports = mongoose.model("Comment", commentSchema);
