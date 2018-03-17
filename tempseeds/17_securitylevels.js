
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('securitylevels').del()
    .then(function () {
      // Inserts seed entries
      return knex('securitylevels').insert([
        {id: 1, colName: 'all access'},
        {id: 2, colName: 'read only'},
        {id: 3, colName: 'submit only'}
      ]);
    });
};
