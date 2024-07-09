import React from 'react';
import {Content} from 'antd/es/layout/layout';
import { Pagination } from 'antd';
import style from "./Content.module.scss";

const ContentContainer: React.FC = () => {
    return (
        <Content>
            {'content'}
            <Pagination className={style.Pagination} defaultCurrent={1} total={50} />
        </Content>
    );
};

export default ContentContainer;
