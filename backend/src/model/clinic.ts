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
   * Fetch all follow ups
   *
   */
  static async fetchFollowUps(filters: FollowUpFilter) {
    const query = this.queryBuilder().select('*').from(FOLLOW_UPS);

    if (filters.status) {
      query.where('status', filters.status);
    }

    return query.orderBy('followUpTime', 'asc');
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
      .where('id', followUpId)
      .returning('id');
  }
}
