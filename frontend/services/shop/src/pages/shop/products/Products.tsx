import React from 'react';
import {observer} from 'mobx-react-lite';
import ProductCard from '@/pages/shop/products/ProductCard';
import WatchStore from '@/state/watchStore';
import {IWatch} from '@packages/shared/src/models/IWatch';
import {Flex} from 'antd';

const Products = observer(() => {
    return (
        <Flex wrap={"wrap"} gap={16}>
            {
                WatchStore.watch.map((watch: IWatch) => (
                    <ProductCard {...watch} />
                ))
            }
        </Flex>
    )
});

export default Products;
