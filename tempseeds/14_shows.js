
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shows').del()
    .then(function () {
      // Inserts seed entries
      return knex('shows').insert([
        {id: 1, colName: 'The Wiz'},
        {id: 2, colName: 'Chicago'},
        {id: 3, colName: 'Guys and Dolls'}
      ]);
    });
};
