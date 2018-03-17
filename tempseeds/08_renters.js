
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('renters').del()
    .then(function () {
      // Inserts seed entries
      return knex('renters').insert([
        {id: 1, colName: 'Flower Mound High School', colFirstName: 'Jeff', colLastName: 'Winkler', colAddress: '734 Texas Oak trl', colCity: 'Lake Dallas', colState: 'TX', colZip: '75065', colPhone: '830-555-5555', colEmail: 'jeff.a.winkler@gmail.com', colZip: '75065'},
        {id: 2, colName: 'Denton High School', colFirstName: 'Julie', colLastName: 'Winkler', colAddress: '734 Texas Oak trl', colCity: 'Lake Dallas', colState: 'TX', colZip: '75065', colPhone: '830-555-5555', colEmail: 'jeff.a.winkler@gmail.com', colZip: '75065'},
        {id: 3, colName: 'Denton Community Theater', colFirstName: 'John', colLastName: 'Mason', colAddress: '734 Texas Oak trl', colCity: 'Lake Dallas', colState: 'TX', colZip: '75065', colPhone: '830-555-5555', colEmail: 'jeff.a.winkler@gmail.com', colZip: '75065'},
        {id: 4, colName: 'Individual', colFirstName: 'Billy', colLastName: 'Jack', colAddress: '734 Texas Oak trl', colCity: 'Lake Dallas', colState: 'TX', colZip: '75065', colPhone: '830-555-5555', colEmail: 'jeff.a.winkler@gmail.com', colZip: '75065'}
      ]);
    });
};
