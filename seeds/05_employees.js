
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {id: 1, colFirstName: 'John', colLastName: 'Lennon'},
        {id: 2, colFirstName: 'Sally', colLastName: 'fields'},
        {id: 3, colFirstName: 'Jeff', colLastName: 'Conway'}
      ]);
    });
};
