const Post=require("../models/postSchema")
const Like=require("../models/likeSchema")

exports.likePost=async (req,res) => {
  
    try {
        
           
        const {post,user}=req.body
        if (!post || !user) {
            return res.status(400).json({ error: "Post and User are required." });
        }
        const liking=new Like({
            post,user,
        });
        const savedlike=await liking.save();
    
        //update the post collection based on like
    
        const updatedpostbylike=await Post.findByIdAndUpdate(post,{$push:{likes:savedlike._id}},{new:true}).populate("likes").exec();
        res.json({
            post:updatedpostbylike,
        })
    } catch (error) {
        return res.status(400).json({
            error:"error caught "
    })
    
}
}


exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        // Validate inputs
        if (!post || !like) {
            return res.status(400).json({ error: "Post and Liking ID are required." });
        }

        // Delete the like
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

        // Check if like exists
        if (!deletedLike) {
            return res.status(404).json({ error: "Like not found." });
        }

        // Update the post by pulling the like
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $pull: { likes: deletedLike._id } },
            { new: true }
        ).populate("likes");

        res.json({
            post: updatedPost,
        });
    } catch (error) {
        return res.status(500).json({
            error: "An error occurred during the unlike operation.",
        });
    }
};
