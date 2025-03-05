import React from 'react';
import {Content} from 'antd/es/layout/layout';
import style from "./Content.module.scss";
import {Outlet} from "react-router-dom";

const ContentContainer: React.FC = () => {
    return (
        <Content className={style.pageContainer}>
            <Outlet />
        </Content>
    );
};

export default ContentContainer;
