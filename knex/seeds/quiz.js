
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('quiz').del()
  await knex('quiz').insert([
    {id: 1, name: 'JS Quiz'},
    {id: 2, name: 'Geographie-Quiz'},
  ]);
};
