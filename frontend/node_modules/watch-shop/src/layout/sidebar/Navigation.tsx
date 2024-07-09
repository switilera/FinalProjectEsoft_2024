import React from 'react';
import {Menu, Typography} from "antd";
import style from './Navigation.module.scss'
const {Text } = Typography;


import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((_ , index) => ({
    key: String(index + 1),
    label: `Название ${index + 1}`,
}));

const Navigation  = () => {
    return (
        <div>
            <Text className={style.Text}>{"Типы"}</Text>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items}/>
        </div>
    );
};

import type { MenuProps } from 'antd';

export default Navigation;
