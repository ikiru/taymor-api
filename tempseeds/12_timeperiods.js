
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('timeperiods').del()
    .then(function () {
      // Inserts seed entries
      return knex('timeperiods').insert([
        {id: 1, colName: 'Medieval'},
        {id: 2, colName: 'French Revolution'},
        {id: 3, colName: 'American'}
      ]);
    });
};
