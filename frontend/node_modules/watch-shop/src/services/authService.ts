import $api from '@/api';
import {AuthResponse} from '@packages/shared/src/models/response/authResponse';
import {AxiosResponse} from 'axios';

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('user/login', {email, password})
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('user/registration', {email, password})
    }
}
