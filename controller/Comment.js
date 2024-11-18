const Comment = require("../models/commentSchema");  // Correct import statement
const Post = require("../models/postSchema");  // Assuming you already have a Post model

exports.createComment = async (req, res) => {
  try {
    // Fetch the data from the request body
    const { post, user, body } = req.body;

    // Create a new comment document
    const comment = new Comment({
      post,
      user,
      body
    });

    // Save the comment to the database
    const savedComment = await comment.save();

    // Find the post by its ID and add the new comment ID to the comments array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }  // Return the updated post with populated comments
    ).populate("comments").exec();

    // Respond with the updated post
    res.json({
      post: updatedPost
    });
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};
