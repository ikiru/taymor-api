
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('businesstypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesstypes').insert([
        {id: 1, colName: 'Professional Costumes Shop'},
        {id: 2, colName: 'Community Theater'},
        {id: 3, colName: 'High School'},
        {id: 4, colName: 'Individual'}
      ]);
    });
};
