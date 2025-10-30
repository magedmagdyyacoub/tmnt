import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostList from '../components/PostList';

import post1 from "../assets/img/post1.jpg";
import post2 from "../assets/img/post2.jpg";
import post3 from "../assets/img/post3.jpg";
import post4 from "../assets/img/post4.jpg";

export default function AdminMyPosts() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Leonardo Leads",
      content: "Leo steps up to lead the turtles in a dangerous mission.",
      image: post1,
      author: "Splinter"
    },
    {
      id: 2,
      title: "Raphael Strikes Back",
      content: "Raph faces powerful enemies and his own rage.",
      image: post2,
      author: "Casey Jones"
    },
    {
      id: 3,
      title: "Donnie the Genius",
      content: "Donatello unveils new high-tech turtle gear.",
      image: post3,
      author: "April O'Neil"
    },
    {
      id: 4,
      title: "Mikey's Pizza Party",
      content: "Mikey turns battle victory into a celebration.",
      image: post4,
      author: "Michelangelo"
    }
  ]);

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const editPost = (updatedPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  return (
    <>
  
      <div style={{ padding: '2rem', background: '#111', color: '#00ffcc', minHeight: '100vh' }}>
        <h1>🧾 My Posts</h1>
        <PostList posts={posts} onDelete={deletePost} onEdit={editPost} />
      </div>
    
    </>
  );
}
