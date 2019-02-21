async function main() {
  const knex = require('./knex/knex.js');

  var result = await knex.from('user')
  console.log(result)
  knex.destroy()
}

main()
