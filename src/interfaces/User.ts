export interface User {
    id?: number;
    fullName?: string;
    email?: string;
    password?: string;
    role?: 'user' | 'worker';
    workerId?: number;
    usedRefferal?: number;
    refferal?: number;
    bannedAt?: Date;
    banReason?: string;
    bannedBy?: number;
    createdAt?: Date;
  }