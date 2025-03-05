import { Knex } from 'knex';

import { addDaysToDate } from '../../util/date';
import { generateToken } from '../../util/clinic';

import { FollowUpStatus } from '../../interface/clinic';

import { FOLLOW_UPS, PATIENTS } from '../../constants/dbTables';

const PATIENTS_TABLE_NAME = PATIENTS;
const FOLLOW_UPS_TABLE_NAME = FOLLOW_UPS;

/**
 * Delete existing entries and seed values for both the patients and follow_ups tables.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  try {
    // Step 1: Delete existing data in both tables to avoid duplication
    await knex(FOLLOW_UPS_TABLE_NAME).del();
    await knex(PATIENTS_TABLE_NAME).del();

    // Step 2: Insert dummy data into the patients table
    const patients = [
      {
        name: 'John Doe',
        type_of_checkup: 'General Checkup',
        created_at: new Date(),
        email: 'john.doe@example.com',
      },
      {
        name: 'Jane Smith',
        type_of_checkup: 'Dental Checkup',
        created_at: new Date(),
        email: 'jane.smith@example.com',
      },
      {
        name: 'Alice Brown',
        type_of_checkup: 'Eye Checkup',
        created_at: new Date(),
        email: 'alice.brown@example.com',
      },
      {
        name: 'Bob Johnson',
        type_of_checkup: 'Heart Checkup',
        created_at: new Date(),
        email: 'bob.johnson@example.com',
      },
      {
        name: 'Emily Davis',
        type_of_checkup: 'Skin Checkup',
        created_at: new Date(),
        email: 'emily.davis@example.com',
      },
      {
        name: 'Michael Lee',
        type_of_checkup: 'Dental Checkup',
        created_at: new Date(),
        email: 'michael.lee@example.com',
      },
      {
        name: 'Samantha Green',
        type_of_checkup: 'General Checkup',
        created_at: new Date(),
        email: 'samantha.green@example.com',
      },
      {
        name: 'David Clark',
        type_of_checkup: 'Eye Checkup',
        created_at: new Date(),
        email: 'david.clark@example.com',
      },
      {
        name: 'Jessica White',
        type_of_checkup: 'Heart Checkup',
        created_at: new Date(),
        email: 'jessica.white@example.com',
      },
      {
        name: 'James Harris',
        type_of_checkup: 'Skin Checkup',
        created_at: new Date(),
        email: 'james.harris@example.com',
      },
      {
        name: 'Sarah Turner',
        type_of_checkup: 'General Checkup',
        created_at: new Date(),
        email: 'sarah.turner@example.com',
      },
      {
        name: 'Daniel Walker',
        type_of_checkup: 'Dental Checkup',
        created_at: new Date(),
        email: 'daniel.walker@example.com',
      },
      {
        name: 'Olivia Nelson',
        type_of_checkup: 'Eye Checkup',
        created_at: new Date(),
        email: 'olivia.nelson@example.com',
      },
      {
        name: 'Matthew King',
        type_of_checkup: 'Heart Checkup',
        created_at: new Date(),
        email: 'matthew.king@example.com',
      },
      {
        name: 'Sophia Adams',
        type_of_checkup: 'Skin Checkup',
        created_at: new Date(),
        email: 'sophia.adams@example.com',
      },
      {
        name: 'Liam Scott',
        type_of_checkup: 'General Checkup',
        created_at: new Date(),
        email: 'liam.scott@example.com',
      },
      {
        name: 'Charlotte Gonzalez',
        type_of_checkup: 'Dental Checkup',
        created_at: new Date(),
        email: 'charlotte.gonzalez@example.com',
      },
      {
        name: 'Jackson Mitchell',
        type_of_checkup: 'Eye Checkup',
        created_at: new Date(),
        email: 'jackson.mitchell@example.com',
      },
      {
        name: 'Amelia Perez',
        type_of_checkup: 'Heart Checkup',
        created_at: new Date(),
        email: 'amelia.perez@example.com',
      },
      {
        name: 'Ethan Roberts',
        type_of_checkup: 'Skin Checkup',
        created_at: new Date(),
        email: 'ethan.roberts@example.com',
      },
    ];

    const insertedPatients = await knex(PATIENTS_TABLE_NAME)
      .insert(patients)
      .returning('id');

    // Step 3: Create follow-up data for each patient
    const followUpData = insertedPatients.flatMap((patient: any) => [
      {
        patient_id: patient.id,
        follow_up_time: addDaysToDate(new Date(), 1),
        status: FollowUpStatus.PENDING,
        token: generateToken(),
      },
      {
        patient_id: patient.id,
        follow_up_time: addDaysToDate(new Date(), 3),
        status: FollowUpStatus.PENDING,
        token: generateToken(),
      },
      {
        patient_id: patient.id,
        follow_up_time: addDaysToDate(new Date(), 7),
        status: FollowUpStatus.PENDING,
        token: generateToken(),
      },
    ]);

    // Step 4: Insert follow-up data into the follow_ups table
    await knex(FOLLOW_UPS_TABLE_NAME).insert(followUpData);

    console.log('Follow-up records inserted successfully');
  } catch (error) {
    console.error(
      'Error inserting patients or follow-up records:',
      error
    );
  }
}
