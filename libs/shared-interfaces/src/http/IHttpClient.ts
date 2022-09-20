import { IRequest, IResponse } from "../wrappers";

export interface IHttpClient {
    get<Type>(request: IRequest<Type>): IResponse<Type>;
    create<Type>(request: IRequest<Type>): IResponse<Type>;
    update<Type>(request: IRequest<Type>): IResponse<Type>;
}
