import React from 'react';
import {Flex, Image, Typography} from 'antd';
import {IWatch} from '@packages/shared/src/models/IWatch';
import {API_URL} from '@/api';
import WatchStore from '@/state/watchStore';

const {Title, Text} = Typography;

const SingleProduct: React.FC<IWatch> = ({img, brandId, name}) => {
    return (
        <Flex gap={8} align={'center'}>
            <Image width={120} src={`${API_URL.slice(0, -3)}/${img}`} />
            <div>
                <Title style={{margin: 0}} level={5}>
                    {`${WatchStore.getBrandById(brandId)} ${name}`}
                </Title>
            </div>
        </Flex>
    );
};

export default SingleProduct;
