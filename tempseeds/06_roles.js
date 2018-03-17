
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {id: 1, colName: 'Owner'},
        {id: 2, colName: 'Head Costumes'},
        {id: 3, colName: 'Manager'}
      ]);
    });
};
