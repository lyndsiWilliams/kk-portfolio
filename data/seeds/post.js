
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'The first post', content: 'This is the content of the first post. This is just an example, for testing reasons.'},
        {id: 2, title: 'The second post', content: 'This is the content of the second post. This is just an example, for testing reasons.'},
        {id: 3, title: 'The third post', content: 'This is the content of the third post. This is just an example, for testing reasons.'}
      ]);
    });
};
