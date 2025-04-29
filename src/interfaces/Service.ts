export interface Service {
    id?: number;
    categoryId?: number;
    subcategoryId?: number;
    workerId?: number;
    description?: string;
    basePrice?: number;
    isAvailable?: boolean;
    createdAt?: Date;
  }