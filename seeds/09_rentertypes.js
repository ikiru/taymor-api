
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rentertypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('rentertypes').insert([
        {id: 1, colName: 'High School'},
        {id: 2, colName: 'Business'},
        {id: 3, colName: 'Community Theater'},
        {id: 4, colName: 'Indivdual'}
      ]);
    });
};
