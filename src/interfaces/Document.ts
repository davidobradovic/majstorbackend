export interface Document {
    id?: number;
    userId?: number;
    documentType?: 'id' | 'passport' | 'driving_license';
    createdAt?: Date;
  }