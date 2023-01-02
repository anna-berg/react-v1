import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContest} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContest);
    const login = event => {
        console.log("in Login")
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', true)
    }

    return (
        <div>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="enter email"/>
                <MyInput type="password" placeholder="enter password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;