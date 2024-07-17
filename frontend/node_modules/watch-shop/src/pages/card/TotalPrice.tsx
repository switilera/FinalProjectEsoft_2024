import React from 'react';
import {observer} from 'mobx-react-lite';
import CardStore from '@/state/cardStore';
import {currencyFormatter} from '@packages/shared/src/utility';
import {Flex, Typography} from 'antd';
const { Title } = Typography;

const TotalPrice = observer(() => {
    return (
        <Flex justify={'right'} style={{marginTop: 16, paddingRight: 16}}>
            <Title level={4}>
                {`Итого: ${currencyFormatter( CardStore.totalPrice)}`}
            </Title>
        </Flex>
    );
})

export default TotalPrice;
