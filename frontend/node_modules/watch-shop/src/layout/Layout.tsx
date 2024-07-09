import React from 'react';
import {Layout} from 'antd';
import Sidebar from '@/layout/sidebar/Sidebar';
import HeaderContainer from '@/layout/header/Header';
import ContentContainer from '@/layout/content/Content';
import FooterContainer from '@packages/shared/src/components/footer/Footer';
import style from './Layout.module.scss';
import TopSidebar from '@/layout/header/topSidebar/TopSidebar';

const LayoutContainer: React.FC = () => {
    return (
        <React.Fragment>
            <TopSidebar />
            <Layout className={style.layoutWrapper}>
                <Sidebar />
                <Layout>
                    <HeaderContainer/>
                    <ContentContainer/>
                    <FooterContainer />
                </Layout>
            </Layout>
        </React.Fragment>

    );
};

export default LayoutContainer;
