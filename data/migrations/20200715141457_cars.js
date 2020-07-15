
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments();
      tbl.text('VIN', 255).notNullable().unique();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
      tbl.string('mileage').notNullable();
      tbl.string('transmission type', 255);
      tbl.string('status', 225);
  })
};

exports.down = function(knex) {
  return knex.schema.downTableifExists('cars')
};
