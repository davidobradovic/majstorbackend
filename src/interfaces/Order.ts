export interface Order {
    id?: number;
    customerId?: number;
    workerId?: number;
    location?: number;
    phoneNumber?: string;
    phoneLocation?: string;
    orderType?: 'online' | 'sms';
    description?: string;
    notes?: string;
    paid?: boolean;
    paidType?: 'online' | 'card' | 'cash';
    status?: 'requested' | 'accepted' | 'rejected' | 'cancelled' | 'inProgress' | 'completed';
    dueDate?: Date;
    createdAt?: Date;
  }
  