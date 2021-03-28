
exports.up = knex =>
  knex.schema.createTable("posts", tbl => {
    tbl.increments();
    tbl.string("title").notNullable();
    tbl.string("content").notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("posts");
