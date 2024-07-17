import React from 'react';
import style from './Actions.module.scss';
import {Button} from 'antd';
import {UserOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import GlobalStore from '@/state/globalStore';
import {observer} from 'mobx-react-lite';
import {Link} from 'react-router-dom';

const ActionsContainer = observer((props: props) => {
    const {setIsShowAuthModal} = props;

    const logoutHandler = () => {
        GlobalStore.setIsAuth(false);

        localStorage.removeItem('token')
    }

    return (
        <div className={style.actions}>
            {
                !GlobalStore.isAuth ? (

                        <Button
                            type={'text'}
                            shape="circle"
                            ghost
                            icon={<UserOutlined />}
                            onClick={() => setIsShowAuthModal(true)}
                        />

                ) : (
                    <React.Fragment>
                        <Link to={'/card'}>
                            <Button
                                type={'text'}
                                shape={'circle'}
                                ghost
                                icon={<ShoppingCartOutlined />}
                            />
                        </Link>
                        <Button type={"text"} onClick={logoutHandler}>
                            {'Выход'}
                        </Button>
                    </React.Fragment>

                )
            }
        </div>
    );
})

interface props {
    setIsShowAuthModal: (b: boolean) => void
}

export default ActionsContainer;
