// Package imports
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');
const mongoose = require('mongoose');
// Database
const { POSTS } = require('./db.json');

const startServer = async () => {
  // Express app creation
  const app = express();
  // Middleware
  app.use(cors());

  // Mongoose setup
  await mongoose.connect('mongodb://localhost:27017/test3', {useNewUrlParser: true});

  const Cat = mongoose.model('Cat', { name: String });

  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));

  // GraphQL schema

  const schema = buildASTSchema(gql`
    type Query {
      posts: [Post]
      post(id: ID!): Post
    }

    type Post {
      id: ID
      title: String
      content: String
    }
  `);

  const mapPost = (post, id) => ({ id, ...post });

  const root = {
    posts: () => POSTS.map(mapPost),
    post: ({ id }) => mapPost(POSTS[id], id),
  };

  // GraphQL middleware magic
  app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  }));

  // Port/server creation
  const PORT = process.env.PORT || 5309;
  app.listen(PORT, () => console.log(`\n.: The server is running on port: ${PORT} :.\n`));
};

startServer();