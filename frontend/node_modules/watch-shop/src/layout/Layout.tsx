import React from 'react';
import {Layout} from 'antd';
import Sidebar from '@/layout/sidebar/Sidebar';
import HeaderContainer from '@/layout/header/Header';
import ContentContainer from '@/layout/content/Content';
import FooterContainer from '@packages/shared/src/components/footer/Footer';
import style from './Layout.module.scss';
import TopSidebar from '@/layout/header/topSidebar/TopSidebar';
import {observer} from 'mobx-react-lite';
import GlobalStore from '@/state/globalStore';
import WatchStore from '@/state/watchStore';
import('@packages/shared/src/styles/theme.scss')
import('../index.scss')

const LayoutContainer = observer(() => {
    React.useEffect(() => {
        if (!WatchStore.watchType.length) {
            (async function() {
                return Promise.all([
                    WatchStore.getWatchBrands(),
                    WatchStore.getWatchTypes()
                ])
            })();
        }

        if (!GlobalStore.isAuth) {
            const isAuth = !!localStorage.getItem('token');

            isAuth && GlobalStore.setIsAuth(true);
        }
    }, [])

        return (
            <React.Fragment>
                <TopSidebar/>
                <Layout className={style.layoutWrapper}>
                    <Sidebar/>
                    <Layout>
                        <HeaderContainer/>
                        <ContentContainer/>
                        <FooterContainer/>
                    </Layout>
                </Layout>
            </React.Fragment>

        );
    }
)

export default LayoutContainer;
