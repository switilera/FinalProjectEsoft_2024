import React from 'react';
import {Header} from 'antd/es/layout/layout';
import {Flex, Typography} from 'antd';
import style from './Header.module.scss';
import {FieldTimeOutlined} from '@ant-design/icons';
import ActionsContainer from '@/layout/header/actions/Actions';
import AuthModal from '@packages/shared/src/components/authModal/authModal';
import GlobalStore from "@/state/globalStore";
import {observer} from "mobx-react-lite";

const {Title} = Typography;

const HeaderContainer = observer(() => {
        return (
            <Header className={style.headerWrapper}>
                <FieldTimeOutlined className={style.icon}/>
                    <Flex justify={"center"}>
                <Title level={4}>{'Time & Place'}</Title>
                    </Flex>
                <ActionsContainer setIsShowAuthModal={GlobalStore.setIsShowAuthModal}/>
                <AuthModal
                    setIsShowAuthModal={GlobalStore.setIsShowAuthModal}
                    isShowAuthModal={GlobalStore.isShowAuthModal}
                    authHandler={GlobalStore.authHandler}
                    registerHandler={GlobalStore.registerHandler}
                    errorMessage={GlobalStore.error}
                />
            </Header>
        )
    }
)

export default HeaderContainer;
