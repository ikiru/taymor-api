
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sizes').del()
    .then(function () {
      // Inserts seed entries
      return knex('sizes').insert([
        {id: 1, colSex: 'Men\'s'},
        {id: 2, colSex: 'Men\'s'},
        {id: 3, colSex: 'Women\'s'}
      ]);
    });
};
