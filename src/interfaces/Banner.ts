export interface Banner {
    id?: number;
    url: string;
    expiringFor?: number;
    expired?: boolean;
    createdAt?: Date;
    createdBy?: number;
  }