
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activelevels').del()
    .then(function () {
      // Inserts seed entries
      return knex('activelevels').insert([
        {id: 1, colName: 'Active'},
        {id: 2, colName: 'Inactive'},
        {id: 3, colName: 'Seasonal'}
      ]);
    });
};
