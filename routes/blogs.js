const express=require("express");
const router=express.Router();


//import controller
const {createPost,getAllPost}=require("../controller/Post");

const {createComment}=require("../controller/Comment");

const{likePost,unlikePost}=require("../controller/Likes");

router.post("/comments/create",createComment)
router.post("/post/create",createPost)
router.get("/post/getall",getAllPost)
router.post("/like",likePost)
router.post("/like/unlike",unlikePost)

module.exports = router;