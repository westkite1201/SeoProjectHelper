import { AxiosResponse } from 'axios';

export interface Response<T> {
  data: T,
  msg?: string,
  statusCode? : number
}

export type ApiResponse<T> = AxiosResponse<Response<T>>
