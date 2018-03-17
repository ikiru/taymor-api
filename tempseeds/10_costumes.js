
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('costumes').del()
    .then(function () {
      // Inserts seed entries
      return knex('costumes').insert([
        {id: 1, colName: 'Vest', colQRcode: 'XXXXXXX', colDescription: 'this is a vest', colOnlineRental: 'true', colRentalPrice: 25.00},
        {id: 2, colName: 'Jacket', colQRcode: 'YYYYYYYY', colDescription: 'this is a jacket', colOnlineRental: 'true', colRentalPrice: 50.00},
        {id: 3, colName: 'Pants', colQRcode: 'ZZZZZZZ', colDescription: 'this is a pants', colOnlineRental: 'true', colRentalPrice: 45.00}
      ]);
    });
};
