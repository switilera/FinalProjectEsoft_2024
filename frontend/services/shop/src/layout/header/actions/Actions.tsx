import React from 'react';
import style from './Actions.module.scss';
import {Button, Modal} from 'antd';
import {UserOutlined, ShoppingCartOutlined} from '@ant-design/icons';

const ActionsContainer: React.FC<props> = ({setIsShowAuthModal}) => {
    return (
        <div className={style.actions}>
            <Button
                type={'text'}
                shape={'circle'}
                ghost
                icon={<ShoppingCartOutlined />}
            />
            <Button
                type={'text'}
                shape="circle"
                ghost
                icon={<UserOutlined />}
                onClick={() => setIsShowAuthModal(true)}
            />
        </div>
    );
};

interface props {
    setIsShowAuthModal: (b: boolean) => void
}

export default ActionsContainer;
