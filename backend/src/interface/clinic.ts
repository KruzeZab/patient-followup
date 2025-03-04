export interface IPatient {
  name: string;
  typeOfCheckup: string;
}

export enum FollowUpStatus {
  PENDING = 'pending',
  CONCERN = 'concern',
  HEALTHY = 'healthy',
}
