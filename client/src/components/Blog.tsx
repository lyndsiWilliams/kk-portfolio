// import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import axios from 'axios';

const Blog = () => {

  useEffect(() => {
    console.log('inside useEffect')
    axios.get('http://localhost:3500/post')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  // const getPosts = gql`
  //   query GetPosts {
  //     posts {
  //       id
  //       title
  //       content
  //     }
  //   }
  // `;
  
  // const { data, loading, error } = useQuery(getPosts);

  // if (loading) {
  //   return <p>Loading...</p>;
  // } else if (error) {
  //   console.log(error);
  //   return <p>ERROR</p>;
  // } else if (!data) {
  //   return <p>Not found</p>;
  // }

  // console.log(data.posts);

  return (
    <div className="blog" style={{ flexDirection: "column" }}>
      <h1>This is the Blog page!</h1>
      {/* {data.posts.map((post: {id: number, title: String, content: String}) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Blog;