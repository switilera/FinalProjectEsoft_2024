import {makeAutoObservable} from "mobx";
import {IAuthField} from "@packages/shared/src/models/IAuthField";
import AuthService from "@/services/authService";
import {IUser} from "@packages/shared/src/models/IUser";

class GlobalStore {
    isAuth: boolean = false;

    error: string = null;

    isShowAuthModal: boolean = false;

    user: IUser;

    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth = (isAuth: boolean) => {
        this.isAuth = isAuth;
    }

    setUser = (user: IUser) => {
        this.user = user;
    }

    setError = (error: string) => {
        this.error = error;
    }

    setIsShowAuthModal = (boolean: boolean) => {
        this.isShowAuthModal = boolean;
    }

    setLocalStorageToken = (token: string) => {
        localStorage.setItem('token', token)
    }

    authHandler = async (values: IAuthField) => {
        try {
            const {data} = await AuthService.login(
                values.username,
                values.password
            )

            if (values.remember) {
                this.setLocalStorageToken(data.token)
            }

            this.setIsAuth(true)
            this.setUser(data.user)
            this.setError(null)
            this.setIsShowAuthModal(false)
        } catch (error) {
            this.setError(error?.response?.data?.message)
        }
    }

    registerHandler = async (values: IAuthField) => {
        try {
            const {data} = await AuthService.registration(
                values.username,
                values.password
            )

            this.setIsShowAuthModal(false)
            this.setLocalStorageToken(data.token);
            this.setUser(data.user)
            this.setIsAuth(true);
        } catch (error) {
            this.setError(error?.response?.data?.message)
        }
    }
}

export default new GlobalStore();
