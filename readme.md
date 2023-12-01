
Developed a RESTful API for a dynamic blogging platform, incorporating key functionalities such as user authentication, authorization, and seamless blog post management. The system enables users to register, authenticate using JSON Web Tokens (JWT). Blog posts, characterized by titles, content, authors, and timestamps, can be created, retrieved, updated, and deleted.

Here are the api's I have done for this blogging platform

# register api (post)
## URL https://blog-app-crud.onrender.com/api/v1/user/register
{
    "name" : "new user",
    "email" : "newuser@gmail.com",
    "password" : "NewUser123@"
}

# login api (post)
## URL https://blog-app-crud.onrender.com/api/v1/user/login
{
   "email" : "newuser@gmail.com",
    "password" : "NewUser123@"
}

### After login you will get token then for further apis, you will have to set that token in req headers