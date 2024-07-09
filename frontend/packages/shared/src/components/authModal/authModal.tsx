import React from 'react';
import AuthModalRegister from './authModalRegister';
import AuthModalLogin from './authModalLogin';
import {Modal} from 'antd';

const AuthModal: React.FC<props> = ({isShowAuthModal, setIsShowAuthModal}) => {
    const [isLogin, setIsLogin] = React.useState(true)

    return (
        <Modal
            open={isShowAuthModal}
            onCancel={() => setIsShowAuthModal(false)}
            footer={null}
        >
            {
                isLogin ?
                    <AuthModalLogin setIsLogin={setIsLogin} /> :
                    <AuthModalRegister setIsLogin={setIsLogin} />
            }
        </Modal>
        )
}

interface props {
    isShowAuthModal: boolean,
    setIsShowAuthModal: (b: boolean) => void
}

export default AuthModal;
