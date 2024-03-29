// Package imports
import { useState, useEffect } from 'react';
import axios from 'axios';
// Component
import BlogForm from './BlogForm';

const Blog = () => {
  // Post type declaration
  interface Post {
    id: number;
    title: string;
    content: string;
  };
  // Local state stores the blog posts
  const [posts, setPosts] = useState<Post[]>();

  // Grab the list of blog posts on page load
  // useEffect(() => {
  //   axios.get('https://sheet.best/api/sheets/1ed47246-bc99-462a-99cf-89b45e80e34c/tabs/posts')
  //     .then(res => {
  //       setPosts(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <div className="blog" style={{ flexDirection: "column" }}>
      <h1>This is the Blog page!</h1>
      <BlogForm />
      {posts?.map((post: {id: number, title: string, content: string}) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
