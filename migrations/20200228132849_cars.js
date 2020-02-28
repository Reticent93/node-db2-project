exports.up = async function(knex) {
	await knex.schema.createTable('cars', (table) => {
		//   table.integer('id').notNull().unique().primary()
		table.increments('id');
		table.text('VIN').notNull().unique();
		table.text('make').notNull();
		table.text('model').notNull().unique();
		table.integer('mileage').notNull();
		table.boolean('clean').defaultTo(1);
	});
};

exports.down = function(knex) {};
