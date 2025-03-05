import BaseModel from '@/model/baseModel';

import { FOLLOW_UPS, PATIENTS } from '@/constants/dbTables';

import {
  FollowUpFilter,
  FollowUpStatus,
  IFollowUp,
  IPatient,
} from '@/interface/clinic';

export default class ClinicModel extends BaseModel {
  /**
   * Create a patient
   *
   */
  static async createPatient(patient: IPatient) {
    return this.queryBuilder()
      .insert(patient)
      .table(PATIENTS)
      .returning('id');
  }

  /**
   * Create follow ups
   *
   */
  static async insertFollowUps(followUp: IFollowUp[]) {
    const result = await this.queryBuilder()
      .insert(followUp)
      .table(FOLLOW_UPS)
      .returning('id');

    return result.map((row: { id: number }) => row.id);
  }

  /**
   * Find a patient with given id
   *
   */
  static async findPatientById(id: number) {
    return this.queryBuilder().where({ id }).first().table(PATIENTS);
  }

  /**
   * Find a patient with given id
   *
   */
  static async findPatientByEmail(email: string) {
    return this.queryBuilder()
      .where({ email })
      .first()
      .table(PATIENTS);
  }

  /**
   * Fetch all follow ups
   *
   */
  static async fetchFollowUps(filters: FollowUpFilter) {
    const query = this.queryBuilder()
      .select(
        'follow_ups.id',
        'follow_ups.followUpTime',
        'follow_ups.status',
        'patients.name',
        'patients.email',
        'patients.typeOfCheckup'
      )
      .from(FOLLOW_UPS)
      .leftJoin(
        'patients',
        'patients.id',
        '=',
        'follow_ups.patientId'
      );

    if (filters.status) {
      query.where('follow_ups.status', filters.status);
    }

    return query.orderBy('follow_ups.followUpTime', 'asc');
  }

  /**
   * Update follow up status
   *
   */
  static async updateFollowUpStatus(
    followUpId: number,
    status: FollowUpStatus
  ) {
    return this.queryBuilder()
      .update({ status })
      .from(FOLLOW_UPS)
      .where('token', followUpId)
      .returning('id');
  }

  /**
   * Fetch a single follow up
   *
   */
  static fetchFollowUp(token: string) {
    return this.queryBuilder()
      .where({ token })
      .first()
      .table(FOLLOW_UPS);
  }
}
