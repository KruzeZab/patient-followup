import BaseModel from '@/model/baseModel';

import { IFollowUp, IPatient } from '@/interface/clinic';

import { FOLLOW_UPS, PATIENTS } from '@/database/constants/dbTables';

export default class ClinicModel extends BaseModel {
  static async createPatient(patient: IPatient) {
    return this.queryBuilder()
      .insert(patient)
      .table(PATIENTS)
      .returning('id');
  }

  static async insertFollowUps(followUp: IFollowUp[]) {
    return this.queryBuilder().insert(followUp).table(FOLLOW_UPS);
  }
}
