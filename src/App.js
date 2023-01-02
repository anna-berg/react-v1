import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContest} from "./context";
import {useEffect, useState} from "react";


function App() {
    const[isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setLoading(false);
    }, [])
    return (
        <AuthContest.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContest.Provider>
    )}

export default App;
