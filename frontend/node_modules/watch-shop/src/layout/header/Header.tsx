import React from 'react';
import {Header} from 'antd/es/layout/layout';
import {Typography} from 'antd';
import style from './Header.module.scss';
import {FieldTimeOutlined} from '@ant-design/icons';
import ActionsContainer from '@/layout/header/actions/Actions';
import AuthModal from '@packages/shared/src/components/authModal/authModal';
const {Title } = Typography;

const HeaderContainer: React.FC = () => {
    const [isShowAuthModal, setIsShowAuthModal] = React.useState(false)

    return (
        <Header className={style.headerWrapper}>
            <FieldTimeOutlined className={style.icon}/>
            <Title level={4}>{'Time & Place'}</Title>
            <ActionsContainer setIsShowAuthModal={setIsShowAuthModal}/>
            <AuthModal
                setIsShowAuthModal={setIsShowAuthModal}
                isShowAuthModal={isShowAuthModal}
            />
        </Header>
    )
}

export default HeaderContainer;
