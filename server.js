// Package imports
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
// const {
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLNonNull,
//   GraphQLInt,
//   GraphQLString,
//   GraphQLList
// } = require('graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');
// Express app creation
const app = express();
// Database
const { POSTS } = require('./db.json');
// Middleware
app.use(cors());

// // Type definitions
// const PostType = new GraphQLObjectType({
//   name: 'Post',
//   description: 'This represents a post written by Katie',
//   fields: () => ({
//     id: { type: GraphQLNonNull(GraphQLInt) },
//     title: { type: GraphQLNonNull(GraphQLString) },
//     content: { type: GraphQLNonNull(GraphQLString) }
//   })
// });

// const RootQueryType = new GraphQLObjectType({
//   name: 'Query',
//   description: 'Root Query',
//   fields: () => ({
//     post: {
//       type: PostType,
//       description: 'A single post',
//       args: {
//         id: { type: GraphQLInt }
//       },
//       resolve: (parent, args) => db.posts.find(post => post.id === args.id)
//     },
//     posts: {
//       type: new GraphQLList(PostType),
//       description: 'List of all posts',
//       resolve: () => db.posts
//     }
//   })
// });

// const RootMutationType = new GraphQLObjectType({
//   name: 'Mutation',
//   description: 'Root mutation',
//   fields: () => ({
//     addPost: {
//       type: PostType,
//       description: 'Add a post',
//       args: {
//         title: { type: GraphQLNonNull(GraphQLString) },
//         content: { type: GraphQLNonNull(GraphQLString) }
//       },
//       resolve: (parent, args) => {
//         const post = {
//           id: db.posts.length + 1,
//           title: args.title,
//           content: args.content
//         };
//         db.posts.push(post);
//         return post;
//       }
//     }
//   })
// });

// // GraphQL schema
// const schema = new GraphQLSchema({
//   query: RootQueryType,
//   mutation: RootMutationType
// });

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