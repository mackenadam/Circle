
exports.up = function(knex) {
  return knex.schema.createTable('cards', (table) => {
      table.increments().primary()
      table.string('value')
      table.string('rules')
      table.string('description')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('cards')
};
