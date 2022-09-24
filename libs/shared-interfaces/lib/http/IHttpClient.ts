import { IRequest, IResponse } from '../wrappers';
import { HttpException } from './HttpException';

export interface IHttpClient extends HttpException {
  get<Type>(request: IRequest<Type>): IResponse<Type>;
  post<Type>(request: IRequest<Type>): IResponse<Type>;
  update<Type>(request: IRequest<Type>): IResponse<Type>;
  delete?<Type>(request: IRequest<Type>): IResponse<Type>;
}
