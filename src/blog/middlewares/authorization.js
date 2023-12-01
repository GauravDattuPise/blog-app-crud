const { default: mongoose } = require("mongoose")
const HttpError = require("../../httpError/http-error")
const blogService = require("../services/blog-service")

const authorization = async (req, res, next) => {
    try {
        const userId = req.userId
        const { blogId } = req.params

        if (!blogId) {
            return next(new HttpError("blog is required", 400))
        }
        if (!mongoose.isValidObjectId(blogId)) {
            return next(new HttpError("blog id is invalid", 400))
        }

        // blog exists or not
        const isBlogExists = await blogService.checkBlog(blogId)
        if (!isBlogExists) {
            return next(new HttpError("blog not found", 404))
        }

        // authorization
        if (userId !== String(isBlogExists.author)) {
            return res.status(403).send({ success: false, message: "You are not authorized" })
        }

        next();
    } catch (error) {
        console.log(error.message)
        next(new HttpError("server error in authorization", 500))
    }
}

module.exports = { authorization }
