import React from 'react';
import {observer} from 'mobx-react-lite';
import WatchStore from '@/state/watchStore';
import Products from '@/pages/shop/products/Products';
import {Breadcrumb, Flex, Pagination} from 'antd';

const Shop = observer(() => {
    React.useEffect(() => {
        (async function() {
            return Promise.all([
                WatchStore.getWatch()
            ])
        })();
    }, [])

    return (
        <React.Fragment>
            <Breadcrumb
                items={[
                    {
                        title: 'Магазин'
                    }
                ]}
                style={{marginBottom: 24}}
            />
            <Products />
            <Flex justify={"center"}>
                <Pagination
                    style={{marginTop: 24}}
                    current={WatchStore.offset}
                    total={WatchStore.watchCount}
                    onChange={(number) => WatchStore.setOffset(number)}
                    showSizeChanger={false}
                    pageSize={WatchStore.limit}
                />
            </Flex>
        </React.Fragment>
    );
});

export default Shop;
