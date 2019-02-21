async function main() {
  const knex = require('./knex/knex.js');

  await knex.schema.createTable('user', table => {
    table.increments('id')
    table.string('nick')
    table.timestamp('created_at')
  })

  knex.destroy()
}

main()
