
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locationtypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'Primary'},
        {id: 2, colName: 'Secondary'},
        {id: 3, colName: 'Franchise'}
      ]);
    });
};
