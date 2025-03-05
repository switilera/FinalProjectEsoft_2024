import React from 'react';
import {observer} from 'mobx-react-lite';
import CardStore from '@/state/cardStore';
import {Table, TableProps} from 'antd';
import SingleProduct from '@/pages/card/SingleProduct';
import {currencyFormatter} from '@packages/shared/src/utility';
import Counter from '@/pages/card/Counter';

const columns: TableProps['columns'] = [
    {
        title: 'Товар',
        dataIndex: 'device',
        key: 'device',
        render: (device) => <SingleProduct {...device} />,
    },
    {
        title: 'Стоимость',
        dataIndex: 'device',
        key: 'price',
        render: (device) => <a>{currencyFormatter(device?.price)}</a>,
    },
    {
        title: 'Количество',
        dataIndex: ['count', 'device'],
        key: 'count',
        render: (_, props) => <Counter {...props} />
    },
    {
        title: 'Общая стоимость',
        key: 'totalPrice',
        dataIndex: ['count', 'device'],
        render: (_, {device, count}) => <a>{currencyFormatter(device?.price * count)}</a>
    }
];

const CardProducts = observer(() => {
    React.useEffect(() => {
        CardStore.getProducts()
    }, [])

    return (
        <Table
            style={{marginTop: 24}}
            pagination={false}
            columns={columns}
            dataSource={CardStore.products}
        />
    )
})

export default CardProducts;
