export interface Advertisement {
    id?: number,
    creatorId: number,
    title: string,
    description?: string,
    city?: string,
    isAvailable?: boolean,
    createdAt?: Date,
  }