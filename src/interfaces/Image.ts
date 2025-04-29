export interface Image {
    id?: number;
    type?: 'banner' | 'avatar' | 'image';
    filename: string;
    path: string;
    userId?: number;
    profileId?: number;
    documentId?: number;
    orderId?: number;
    messageId?: number;
    serviceId?: number;
    uploadedAt?: Date;
  }
  