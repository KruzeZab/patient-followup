export interface IPatient {
  name: string;
  email: string;
  typeOfCheckup: string;
}

export enum FollowUpStatus {
  PENDING = 'pending',
  CONCERN = 'concern',
  HEALTHY = 'healthy',
}

export interface IFollowUp {
  patientId: number;
  followUpTime: Date | number;
  status: FollowUpStatus;
  token: string;
}
