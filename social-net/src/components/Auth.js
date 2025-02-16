import React, { useEffect, useState } from "react";

const Auth = ({ setUser }) => {
    const username = useState("");
    const setUsername = useState("");
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) setUser(savedUser);
    }, [setUser]);
    return (
        <div>
            <h1>Login</h1>
            <input 
            type="text" 
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={() => {if (!username.trim()) return; localStorage.setItem("user", username); setUser(username); }}>Enter</button>
        </div>
    );
};
export default Auth;