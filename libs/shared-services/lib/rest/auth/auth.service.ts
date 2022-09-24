import { IRequest, IResponse, IRestService } from 'shared-interfaces'
import { UserEntity } from 'shared-entities';

class AuthService implements IRestService<UserEntity> {
    get<UserEntity>(request: IRequest<UserEntity>): IResponse<UserEntity> {
        throw new Error('Method not implemented.');
    }
    post<UserEntity>(request: IRequest<UserEntity>): IResponse<UserEntity> {
        throw new Error('Method not implemented.');
    }
    update<UserEntity>(request: IRequest<UserEntity>): IResponse<UserEntity> {
        throw new Error('Method not implemented.');
    }
    httpException(status: string, message: string): string {
        throw new Error('Method not implemented.');
    }
}
