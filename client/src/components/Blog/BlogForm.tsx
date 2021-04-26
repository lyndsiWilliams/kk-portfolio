// Package imports
import { useState } from 'react';
import axios from 'axios';
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

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        New Collection
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
