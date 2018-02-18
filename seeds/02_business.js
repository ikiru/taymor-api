
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('business').del()
    .then(function () {
      // Inserts seed entries
      return knex('business').insert([
        {id: 1, colName: 'Roses'},
        {id: 2, colName: 'NORCOSTCO'},
        {id: 3, colName: 'LISD'}
      ]);
    });
};
