import BaseModel from '@/model/baseModel';

import { IPatient } from '@/interface/clinic';

export default class ClinicModel extends BaseModel {
  static async createPatient(patient: IPatient) {
    console.log({ patient });
    return this.queryBuilder().insert(patient).table('patients');
  }
}
