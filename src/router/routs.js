import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const  privateRoutes = [
    {path: "/about", element: <About/> + '/:id', exact: true},
    {path: "/posts", element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostIdPage/>, exact: true},
]
export const  publicRoutes = [
    {path: "/login", element: <Login/>, exact: true},
    {path: "/registration", element: <Registration/>, exact: true},
]