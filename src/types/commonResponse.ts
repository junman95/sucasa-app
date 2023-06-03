interface APIDataResponse<T> {
  data: T;
}

export interface CommonResponse<T> {
  data: APIDataResponse<T>;
  status: number;
  statusText: string;
}
