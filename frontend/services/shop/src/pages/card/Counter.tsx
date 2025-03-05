import React from 'react';
import {IWatch} from '@packages/shared/src/models/IWatch';
import {Button, Flex, Typography} from 'antd';
import CardStore from '@/state/cardStore';

const {Text} = Typography;

const Counter: React.FC<props> = ({count, device}) => {
    return (
        <Flex gap={8} align={'center'} justify={'center'}>
            <Button onClick={() => CardStore.addProduct(device.id)} size={'small'}>+</Button>
            <Text>{count}</Text>
            <Button onClick={() => CardStore.deleteProduct(device.id)} size={'small'}>-</Button>
        </Flex>
    );
}

interface props {
    count: number,
    device: IWatch
}

export default Counter;
