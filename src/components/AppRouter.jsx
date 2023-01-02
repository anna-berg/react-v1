import React, {useContext} from 'react';

import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routs";
import {AuthContest} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContest);

    if(isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="/*" element={<Navigate to="/posts" replace/>}/>
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="/*" element={<Navigate to="/login" replace/>}/>
            </Routes>
    )
};

export default AppRouter;