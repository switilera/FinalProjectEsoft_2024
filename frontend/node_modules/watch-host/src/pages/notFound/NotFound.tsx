import React from 'react';
import { Button, Result } from 'antd';
import {Link} from 'react-router-dom';

const NotFound: React.FC = () => (
    <Result
        status="404"
        title="404"
        subTitle="Извините, запрашиваемой страницы не существует"
        extra={(
            <Button type="primary">
                <Link to={'/'}>{'На главную'}</Link>
            </Button>
        )}
    />
);

export default NotFound;
