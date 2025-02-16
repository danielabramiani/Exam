import React, { useState } from "react";

const Auth = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);

    const handleSubmit = () => {
        if (!username.trim() || !password.trim()) {
            alert("please enter both username and password");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userFound = existingUsers.find((user) => user.username === username);

        if (isRegistering) {
            if (userFound) {
                alert("username already exists try logging in");
            } else {
                const newUser = { username, password };
                existingUsers.push(newUser);
                localStorage.setItem("users", JSON.stringify(existingUsers));
                localStorage.setItem("user", username);
                setUser(username);
            }
        } else {
            if (userFound && userFound.password === password) {
                localStorage.setItem("user", username);
                setUser(username);
            } else {
                alert("invalid username or password");
            }
        }
    };

    return (
        <div>
            <h1>{isRegistering ? "register" : "login"}</h1>
            <input
                type="text"
                placeholder="enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>{isRegistering ? "register" : "login"}</button>
            <p onClick={() => setIsRegistering(!isRegistering)} style={{ cursor: "pointer", color: "blue" }}>
                {isRegistering ? "already have an account login" : "don't have an account register"}
            </p>
        </div>
    );
};

export default Auth;
