

## Developed a robust RESTful API for a dynamic blogging platform, integrating essential features such as user authentication, authorization, and seamless blog post management. Users can easily register and authenticate using JSON Web Tokens (JWT) for secure access to the system.

Here are the api's I have done for this blogging platform

### register api (post)
### URL https://blog-app-crud.onrender.com/api/v1/user/register
{
    "name" : "new user",
    "email" : "newuser@gmail.com",
    "password" : "NewUser123@"
}
## _______________________________________________________

### login api (post)
### URL https://blog-app-crud.onrender.com/api/v1/user/login
{
   "email" : "newuser@gmail.com",
    "password" : "NewUser123@"
}
## _______________________________________________________

### After login you will get token then for further apis, you will have to set that token in req headers
## _______________________________________________________


### create blog api (post)
### URL https://blog-app-crud.onrender.com/api/v1/blog/create
{
    "title" : "new user blog title",
    "content" : "new user blog content"
}
## _______________________________________________________


### get only specific users blog (get)
### URL https://blog-app-crud.onrender.com/api/v1/blog/get-users-blog
## _______________________________________________________

### get all blogs (get)
### URL https://blog-app-crud.onrender.com/api/v1/blog/get-all-blogs
## _______________________________________________________

### update specific blog (PUT)
### URL https://blog-app-crud.onrender.com/api/v1/blog/update/:blogId
{
    "content" : "updated content",
    "title" : "updated title"
}
## _______________________________________________________

### delete specific blog (DELETE)
### URL https://blog-app-crud.onrender.com/api/v1/blog/delete/:blogId