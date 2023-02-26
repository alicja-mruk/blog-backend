// Use your own identifier type: number, ObjectId, UUID. However, it must be serializable
export type ID = string;

export interface Indexed {
  id: ID;
}

export type Entity<T> = T & Indexed;
