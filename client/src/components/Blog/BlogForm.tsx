// Package imports
import { useState } from 'react';
// Component
import BlogCreateForm from './BlogCreateForm';
// Styling
import { Button } from 'antd';

const BlogForm = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  const button = document.querySelector('#create-post-button');
  console.log(button);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
        style={{ border: "2px solid black" }}
        id="create-post-button"
      >
        New Post
      </Button>
      <BlogCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default BlogForm;
