async function main() {
  const knex = require('./knex/knex.js');
  let result

  result = await knex('question')
                 .select('question', 'answer')
                 .where('quiz_id', 1)
                 .orderBy('order')
                 .join('answer', {'question.id': 'answer.question_id'})
                 .where('is_correct', true)
  for (let line of result) {
    console.log(line.question, line.answer)
  }

  result = await knex('quiz')
                .select('name')
                .count('question.id as count')
                .join('question', {'quiz.id': 'question.quiz_id'})
                .groupBy('quiz.id')
                .orderBy('count', 'desc')


  for (let line of result) {
    console.log(`${line.name} (${line.count} Fragen)`)
  }



  knex.destroy()
}

main()
