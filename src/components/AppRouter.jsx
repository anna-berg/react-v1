import React from 'react';

import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {routs} from "../router/routs";

const AppRouter = () => {
    return (
            <Routes>
                <Routes>
                    {routs.map(route =>
                        <Route element={route.element} path={route.path} exact={route.exact}/>
                    )}
                    <Route path="/*" element={<Navigate to="/posts" replace/> }/>
                </Routes>
            </Routes>
    )
};

export default AppRouter;