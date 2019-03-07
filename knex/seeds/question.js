
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('question').del()
  await knex('question').insert([
    {id: 1, question: 'Was ist besser, let oder var?', order: 1, quiz_id: 1},
    {id: 2, question: 'Wieviele Zahlentypen gibt es in JS?', order: 2, quiz_id: 1},
    {id: 3, question: 'Wer ist Brendan Eich?', order: 3, quiz_id: 1},
    {id: 4, question: 'Gibt es Klassen in JS?', order: 4, quiz_id: 1},
    {id: 5, question: 'Wie tief ist der Thunersee?', order: 1, quiz_id: 2},
    {id: 6, question: 'Wie lang ist das Matterhorn?', order: 2, quiz_id: 2},
  ]);
};
