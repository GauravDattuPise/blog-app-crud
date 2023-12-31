
const express = require("express");
const router = express.Router();

const { createBlog, updateBlog, getUserBlogs, getAllBlog, deleteBlog } = require("../controllers/blog-controller");
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");

// create blog
router.post("/create", authentication, createBlog)

// update blog
router.put("/update/:blogId", authentication, authorization, updateBlog)

// get users blogs
router.get("/get-users-blog", authentication, getUserBlogs)

// get all blogs
router.get("/get-all-blogs", getAllBlog)

// delete blog
router.delete("/delete/:blogId", authentication, authorization, deleteBlog)

module.exports = router