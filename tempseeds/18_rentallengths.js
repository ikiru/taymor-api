
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rentallengths').del()
    .then(function () {
      // Inserts seed entries
      return knex('rentallengths').insert([
        {id: 1, colName: 'Days',colDays: 3},
        {id: 2, colName: 'Week',colDays: 7},
        {id: 3, colName: 'Two Weeks',colDays: 14}
      ]);
    });
};
