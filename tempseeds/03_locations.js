
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, colName: 'rowValue1', colAddress: 'rowValue1', colCity: 'rowValue1', colState: 'rowValue1', colZip: 'rowValue1', colPhone: 'rowValue1', colEmail: 'rowValue1', colTaxRate: 8.25},
        {id: 2, colName: 'rowValue2', colAddress: 'rowValue2', colCity: 'rowValue2', colState: 'rowValue2', colZip: 'rowValue2', colPhone: 'rowValue2', colEmail: 'rowValue2', colTaxRate: 7.25},
        {id: 3, colName: 'rowValue3', colAddress: 'rowValue3', colCity: 'rowValue3', colState: 'rowValue3', colZip: 'rowValue3', colPhone: 'rowValue3', colEmail: 'rowValue3', colTaxRate: 8.00}
      ]);
    });
};
