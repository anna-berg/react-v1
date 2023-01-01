import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";

export const  routs = [
    {path: "/about", element: About, exact: true},
    {path: "/posts", element: Posts, exact: true},
    {path: '/posts/:id', element: PostIdPage, exact: true},
]