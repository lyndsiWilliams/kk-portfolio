import { useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  useEffect(() => {
    axios.get('http://localhost:5309/graphql')
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }, [])

  return (
    <div className="blog" style={{ flexDirection: "column" }}>
      <h1>This is the Blog page!</h1>
    </div>
  );
};

export default Blog;