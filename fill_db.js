async function main() {
  const knex = require('./knex/knex.js');

  await knex('user').insert(
    {nick: "trz", created_at: Date.now()}
  )

  knex.destroy()
}

main()
