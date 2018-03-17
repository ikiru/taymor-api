
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transactiontypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactiontypes').insert([
        {id: 1, colName: 'Rental'},
        {id: 2, colName: 'Sale'},
        {id: 3, colName: 'Loan'}
      ]);
    });
};
