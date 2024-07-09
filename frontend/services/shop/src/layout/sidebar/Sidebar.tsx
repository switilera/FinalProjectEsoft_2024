import React from 'react';
import Sider from 'antd/es/layout/Sider';
import style from './Sidebar.module.scss'
import Navigation from '@/layout/sidebar/Navigation';
import Brands from '@/layout/sidebar/Brands';
import {Flex} from 'antd';


const Sidebar: React.FC = () => {
    return (
        <Sider className={style.sidebar}>
            <Flex gap={32} vertical={true}>
                <Navigation />
                <Brands />
            </Flex>
        </Sider>
    );
};

export default Sidebar;
