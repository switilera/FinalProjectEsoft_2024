import React from 'react';
import AuthModalRegister from './authModalRegister';
import AuthModalLogin from './authModalLogin';
import {Alert, Modal} from 'antd';
import {IAuthField} from "../../models/IAuthField";

const AuthModal: React.FC<props> = ({isShowAuthModal, setIsShowAuthModal, authHandler, registerHandler, errorMessage}) => {
    const [isLogin, setIsLogin] = React.useState(true)

    return (
        <Modal
            open={isShowAuthModal}
            onCancel={() => setIsShowAuthModal(false)}
            footer={null}
        >
            {
                isLogin ?
                    <AuthModalLogin
                        setIsLogin={setIsLogin}
                        authHandler={authHandler}
                    /> :
                    <AuthModalRegister
                        setIsLogin={setIsLogin}
                        registerHandler={registerHandler}
                    />
            }
            {
                errorMessage && (
                    <Alert message={errorMessage} type="error" />
                )
            }
        </Modal>
        )
}

interface props {
    isShowAuthModal: boolean,
    setIsShowAuthModal: (b: boolean) => void,
    authHandler: (values: IAuthField) => void,
    registerHandler: (values: IAuthField) => void,
    errorMessage?: string
}

export default AuthModal;
