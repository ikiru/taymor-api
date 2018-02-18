
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('keywords').del()
    .then(function () {
      // Inserts seed entries
      return knex('keywords').insert([
        {id: 1, colName: 'flannel'},
        {id: 2, colName: 'wool'},
        {id: 3, colName: 'african'}
      ]);
    });
};
