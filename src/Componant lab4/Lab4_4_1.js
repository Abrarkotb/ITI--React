import React, { useState, useEffect } from 'react';

const Lab4_4_1 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
     
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="div2">
      <h2>All Posts</h2>
      
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Lab4_4_1;