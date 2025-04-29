export interface WorkerProfile {
    id?: number;
    userId?: number;
    description?: string;
    status?: 'active' | 'inactive' | 'banned';
    verificationStatus?: 'confirmed' | 'failed';
    createdAt?: Date;
  }
  