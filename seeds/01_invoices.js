
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('invoices').del()
    .then(function () {
      // Inserts seed entries
      return knex('invoices').insert([
        {id: 1, colName: 'rowValue1', coldatecheckedout: '1980-06-17', coldatecheckedin:'1980-06-22'},
        {id: 2, colName: 'rowValue2', coldatecheckedout: '1989-01-17', coldatecheckedin:'1989-06-25'},
        {id: 3, colName: 'rowValue3', coldatecheckedout: '1991-05-18', coldatecheckedin:'1991-05-23'}
      ]);
    });
};
