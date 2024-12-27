export type InsertResult<T> = {
  inserted: number;
  items: T[];
}

export type UpdateResult<T> = {
  updated: number;
  items: T[];
}

export type DeleteResult = {
  deleted: number;
}
