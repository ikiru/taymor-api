
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('invoice_costumes').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colInvoices_id: 1},
        {id: 2, colInvoices_id: 2},
        {id: 3, colInvoices_id: 3}
      ]);
    });
};
