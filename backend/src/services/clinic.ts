import ClinicModel from '@/model/clinic';

import { IPatient } from '@/interface/clinic';

export async function createPatient(
  name: string,
  typeOfCheckup: string
) {
  const newPatient: IPatient = {
    name,
    typeOfCheckup,
  };

  return ClinicModel.createPatient(newPatient);
}
