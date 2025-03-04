import BaseModel from '@/model/baseModel';

import { IFollowUp, IPatient } from '@/interface/clinic';

import { FOLLOW_UPS, PATIENTS } from '@/constants/dbTables';

export default class ClinicModel extends BaseModel {
  static async createPatient(patient: IPatient) {
    return this.queryBuilder()
      .insert(patient)
      .table(PATIENTS)
      .returning('id');
  }

  static async insertFollowUps(followUp: IFollowUp[]) {
    const result = await this.queryBuilder()
      .insert(followUp)
      .table(FOLLOW_UPS)
      .returning('id');

    return result.map((row: { id: number }) => row.id);
  }

  static async findPatientById(id: number) {
    return this.queryBuilder().where({ id }).first().table(PATIENTS);
  }
}
