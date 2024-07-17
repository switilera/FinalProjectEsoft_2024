import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import WatchStore from '@/state/watchStore';
import Product from '@/pages/singleProduct/Product';
import {Breadcrumb} from 'antd';

const SingleProduct = observer(() => {
    const { id: productId } = useParams();

    React.useEffect( () => {
        (async function() {
            return Promise.all([
                WatchStore.getSingleWatch(Number(productId))
            ])
        })();
    }, [])

    return <><Breadcrumb
        items={[
            {
                title: <Link to={'/'}>{'Магазин'}</Link>,
            },
            {
                title: 'Товар'
            }
        ]}/><Product/></>

})

export default SingleProduct;
