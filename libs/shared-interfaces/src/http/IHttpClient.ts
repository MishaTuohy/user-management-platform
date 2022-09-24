import { IRequest, IResponse } from '../wrappers';

export interface IHttpClient {
  get<Type>(request: IRequest<Type>): IResponse<Type>;
  post<Type>(request: IRequest<Type>): IResponse<Type>;
  update<Type>(request: IRequest<Type>): IResponse<Type>;
  delete?<Type>(request: IRequest<Type>): IResponse<Type>;
}
