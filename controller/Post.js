const Post=require("../models/postSchema");
//import the schema

exports.createPost=async(req,res)=>{
    try {
        const{title,body}=req.body
        const post=new Post({title,body})

        const savedpost=await post.save();
        res.status(201).json(savedpost);

    } catch (error) {
        return res.status(400).json({
            error:"error caught "
        })
        
    }
}


exports.getAllPost=async (req,res) => {

    try {
        const getPost=await Post.find().populate("likes").populate("comments").exec();
        res.json({
            getPost,
        })
    } catch (error) {
        return res.status(400).json({
            error:"error caught "
        })
    }
    
}