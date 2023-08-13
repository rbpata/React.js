import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userError,setUserError] = useState(false);
    const [passError,setPassError] = useState(false);
    function loginHandle(e) {

        if(username.length<3 || password.length<7 )
            alert("Enter right Information");
        else
            alert("All is Good!");
        e.preventDefault();
        // Perform your login logic here
    }

    function userHandler(e) {
        let item = e.target.value;
        if(item.length <3){
            setUserError(true);}
        else
            setUserError(false);

        setUsername(item);
        
    }
    function passwordHandler(e) {
        let item = e.target.value;
        if(item.length <7){
            setPassError(true);}
        else
            setPassError(false);

        setPassword(item);
        
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userError?<span>Invalid user !! </span>:""}
                <br /> <br />
                <input type="text" placeholder="Enter User Password" onChange={passwordHandler} />{passError?<span>Invalid Password !! </span>:""}
                <br /> <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
