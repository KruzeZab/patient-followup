import { Knex } from 'knex';

import { PATIENTS } from '../../constants/dbTables';

const TABLE_NAME = PATIENTS;

/**
 * Create table patients.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements();

    table.string('name').notNullable();

    table.string('email').unique().notNullable();

    table.string('type_of_checkup').notNullable();

    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));

    table.timestamp('updated_at').nullable();
  });
}

/**
 * Drop table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
