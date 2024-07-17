import React from 'react';
import Sider from 'antd/es/layout/Sider';
import style from './Sidebar.module.scss'
import Navigation from '@/layout/sidebar/Navigation';
import Brands from '@/layout/sidebar/Brands';
import {Button, Flex} from 'antd';
import WatchStore from '@/state/watchStore';


const Sidebar: React.FC = () => {
    return (
        <Sider className={style.sidebar} width={280}>
            <Flex gap={32} vertical={true}>
                <Navigation />
                <Brands />
                <Button onClick={WatchStore.clearFilters}>{'Сбросить фильтры'}</Button>
            </Flex>
        </Sider>
    );
};

export default Sidebar;
