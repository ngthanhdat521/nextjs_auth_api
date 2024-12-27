export type HttpResponse<T> = {
  result: T;
  timestamp: string;
  status: number;
}
