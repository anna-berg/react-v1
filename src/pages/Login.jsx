import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <form>
                <MyInput type="text" placeholder="enter email"/>
                <MyInput type="password" placeholder="enter password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;