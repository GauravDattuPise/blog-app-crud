const blogModel = require("../models/blog-model")

// create blog
exports.createBlog = async (blog) => {
    return await blogModel.create(blog);
}

// check blog exists or not
exports.checkBlog = async (blogId) => {
    return await blogModel.findOne({ _id: blogId, isDeleted: false })
}

// update the blog
exports.updateBlog = async ( blogId, title, content ) => {
    return await blogModel.findOneAndUpdate({ _id: blogId, isDeleted: false }, { $set: { title: title, content: content } }, { new: true })
}

// get all blogs
exports.getAllBlogs = async () => {
    return await blogModel.find({isDeleted: false }).select({ title: 1, content: 1, author: 1, _id : 0 })
}

// get users blogs
exports.getUsersBlogs = async (id) => {
    return await blogModel.find({ author: id, isDeleted: false }).select({ title: 1, content: 1, _id : 0 })
}

// delete blog
exports.deleteBlog = async (blogId) => {
    return await blogModel.findByIdAndUpdate(blogId, { $set: { isDeleted: true } })
}