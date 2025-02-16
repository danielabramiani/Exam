import React, { useState, useEffect } from "react";

const Home = ({ user, setUser }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  const addPost = () => {
    if (!title.trim() || !body.trim()) return;
    const newPost = { id: Date.now(), title, body, isPublic, author: user };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setTitle("");
    setBody("");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      <h1>welcome {user}</h1>
      <button onClick={logout}>Logout</button>

      <h3>create post for memorys</h3>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={isPublic}
          onChange={() => setIsPublic(!isPublic)}
        />
        public
      </label>
      <button onClick={addPost}>add post</button>

      <h2>your posts</h2>
      {posts
        .filter((post) => post.author === user)
        .map((post) => (
          <div key={post.id}>
            <h4>{post.title} {post.isPublic ? "(Public)" : "(Private)"}</h4>
            <p>{post.body}</p>
            <p>by: {post.author}</p>
          </div>
        ))}

      <h3>news (public posts)</h3>
      {posts.filter((post) => post.isPublic)
        .map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <p>by: {post.author}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;