import React from 'react';
import {Button, Card, Flex} from 'antd';
import Meta from 'antd/es/card/Meta';
import {API_URL} from '@/api';
import WatchStore from '@/state/watchStore';
import {observer} from 'mobx-react-lite';
import {SearchOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import s from './products.module.scss';
import CardStore from '@/state/cardStore';
import {currencyFormatter} from '@packages/shared/src/utility';
import {Link} from 'react-router-dom';

const ProductCard: React.FC<props> = observer(({id, img, brandId, name, price}) => {
    return (

            <Card
                hoverable
                cover={<img alt="cover" src={`${API_URL.slice(0, -3)}/${img}`} />}
                className={s.card}
            >
                <Flex justify={'space-between'}>
                    <Meta
                        title={`${WatchStore.getBrandById(brandId)} ${name}`}
                        description={currencyFormatter(price)}
                    />
                    <Flex gap={4}>
                        <Button icon={<ShoppingCartOutlined />} onClick={() => CardStore.addProduct(id)}/>
                        <Link to={`/device/${id}`}>
                            <Button icon={<SearchOutlined />} onClick={() => CardStore.addProduct(id)}/>
                        </Link>
                    </Flex>
                </Flex>
            </Card>

    );
});

interface props {
    id: number
    img: string,
    brandId: number,
    name: string,
    price: number
}

export default ProductCard;
