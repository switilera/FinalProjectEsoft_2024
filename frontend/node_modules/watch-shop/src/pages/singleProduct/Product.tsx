import React from 'react';
import {observer} from 'mobx-react-lite';
import WatchStore from '@/state/watchStore';
import {Button, Result} from 'antd';
import {Link} from 'react-router-dom';

const Product = observer(() => {
    return WatchStore.device ? (
        <div>
            {WatchStore.device.name}
        </div>
    ) : <Result
        status="404"
        title="404 Страница не найдена :("
        subTitle="Мы не смогли найти страницу, которую вы ищете"
        extra={
        <Link to={'/'}>
            <Button type="primary">Перейти на главную</Button>
        </Link>
    }
    />;
});

export default Product;
