
const { default: mongoose } = require("mongoose");
const HttpError = require("../../httpError/http-error");
const blogService = require("../services/blog-service")

// Blog Creation

exports.createBlog = async (req, res, next) => {
    try {
        const blogData = req.body;
        let { title, content } = blogData;

        // validation
        if (!title || title.trim().length === 0) {
            return next(new HttpError("Blog title is required", 400));
        }
        blogData.title = blogData.title.trim();

        if (!content || content.trim().length === 0) {
            return next(new HttpError("Blog content is required", 400));
        }
        blogData.content = blogData.content.trim();

        // getting userId from request objet
        blogData.author = req.userId


        const createdBlog = await blogService.createBlog(blogData);
        return res.status(201).send({ success: true, message: "Blog created Successfully", blogData: createdBlog })

    } catch (error) {
        next(new HttpError("server error in create blog", 500))
    }
}



// Getting users blogs

exports.getUserBlogs = async (req, res, next) => {

    try {
        // getting userId form req object
        const id = req.userId

        const blogs = await blogService.getUsersBlogs(id)
        if (blogs.length === 0) {
            return next(new HttpError("You have not posted any blog yet", 400))
        }
        return res.status(200).send({ success: true, message: "My blogs", totalBlogs: blogs.length, blogs });

    } catch (error) {
        next(new HttpError("server error in get user's  blogs", 500))
    }
}


// getting all blogs

exports.getAllBlog = async (req, res, next) => {

    try {
        const blogs = await blogService.getAllBlogs()
        return res.status(200).send({ success: true, message: "All blogs", totalBlogs: blogs.length, blogs });

    } catch (error) {
        next(new HttpError("server error in get all blogs", 500))
    }
}



// updating blog

exports.updateBlog = async (req, res, next) => {

    try {
        // const userId = req.userId
        const { blogId } = req.params
        const blogData = req.body;

        let { title, content } = blogData;

        // updating blog
        const updatedBlog = await blogService.updateBlog(blogId, title, content)
        return res.status(200).send({ success: true, message: "Blog Updated Successfully", blogData: updatedBlog });

    } catch (error) {
        console.log(error.message)
        next(new HttpError("server error in blog update", 500))
    }
}



// blog deletion

exports.deleteBlog = async (req, res, next) => {

    try {
        const { blogId } = req.params;

        // delete blog
        await blogService.deleteBlog(blogId);

        return res.status(200).send({ success: true, message: "Blog Deleted Successfully" })

    } catch (error) {
        return next(new HttpError("server error in blog deletion", 500))
    }
}