
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shares').del()
    .then(function () {
      // Inserts seed entries
      return knex('shares').insert([
        {id: 1, colLocation_id: 'rowValue1',colLocation_id: 'rowValue3'},
        {id: 2, colLocation_id: 'rowValue2',colLocation_id: 'rowValue2'},
        {id: 3, colLocation_id: 'rowValue3',colLocation_id: 'rowValue1'}
      ]);
    });
};
