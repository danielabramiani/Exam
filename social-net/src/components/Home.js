import React, { useState, useEffect } from "react";

const Home = ({user,setUser}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isPublic, setIsPublic] = useState(true);
    const [post, setPosts] = useState([]);
    useEffect(() => {
        const savedPosts = //soon?
        setPosts(savedPosts);
    }, []);
    const addPost = () => {
        if (!title.trim() || !body.trim()) return;
        const newPost = { id: Date.now(), title, body, isPublic, author: user};
        const updatedPosts = [...postMessage, newPost];
        setPosts(updatedPosts);
        localStorage.setItem("posts");
        setTitle("");
        setBody("");
    };
    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };
    return (
        <div>
            <h1>Welcome {user} </h1>
            <button onClick={logout}>Logout</button>
            <h2>create post for sweat memorys</h2>
            <input type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)
            }/>
            <textarea placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)
            }/>
            <label>
                <input type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(!isPublic)}
                />
                public post
            </label>
            <button onClick={addPost}>add post</button>
            <h3>Your posts</h3>

        </div>
    );
};
export default Home;