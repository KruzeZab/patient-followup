export enum HealthStatus {
  PENDING = 'pending',
  CONCERN = 'concern',
  HEALTHY = 'healthy',
}

export interface IFollowUp {
  name: string;
  email: string;
  id: string;
  typeOfCheckup: string;
  patientId: number;
  followUpTime: string;
  status: HealthStatus;
}

export interface FollowUpResponse {
  data: IFollowUp[];
}
