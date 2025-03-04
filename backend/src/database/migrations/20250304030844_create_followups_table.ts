import { Knex } from 'knex';

import { FOLLOW_UPS } from '../constants/dbTables';
import { FollowUpStatus } from '../../interface/clinic';

const TABLE_NAME = FOLLOW_UPS;

/**
 * Create table follow_ups.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements();

    table
      .integer('patient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('patients')
      .onDelete('CASCADE');

    table.timestamp('follow_up_time').notNullable();

    table
      .enu('status', Object.values(FollowUpStatus))
      .defaultTo(FollowUpStatus.PENDING);

    table.string('token').unique().notNullable();

    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));

    table.timestamp('updated_at').nullable();
  });
}

/**
 * Drop table follow_ups.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
