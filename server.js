const express = require('express');
const cors = require('cors');
const db = require('./data/db.js');

const app = express();

app.use(express.json());
app.use(cors());

/**
 * METHOD: GET
 * ROUTE: /post
 * PURPOSE: Get all tasks
 */
app.get('/post', async (req, res) => {
  const posts = await db('posts');
  res.json({ posts });
});

/**
 * METHOD: POST
 * ROUTE: /post
 * PURPOSE: Create new task
 */
app.post('/post', async (req, res) => {
  const { task } = req.body;
  const newPost = await db('posts')
    .insert(task)
    .then(item => {
      return item.rowCount;
    });
    
  if (newPost === 1) {
    return res.status(201).json({ message: 'post created successfully' });
  }
});

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`.:App listening on port ${PORT}:.`));