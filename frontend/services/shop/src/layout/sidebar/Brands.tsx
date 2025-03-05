import React from 'react';
import {observer} from 'mobx-react-lite';
import WatchStore from '@/state/watchStore';
import {Flex, Tag, Typography} from 'antd';
import s from './Sidebar.module.scss';

const {Text} = Typography;

const Brands = observer(() => {
    const tagsData = WatchStore.watchBrands;

    return (
        <React.Fragment>
            <Text className={s.text}>{"Бренды"}</Text>
            <Flex gap={4} wrap align="center">
                {tagsData.map<React.ReactNode>((tag) => (
                    <Tag.CheckableTag
                        className={s.tagsText}
                        key={tag.id}
                        checked={WatchStore.filterBrand === tag.id}
                        onChange={(checked) => WatchStore.setFilterBrand(checked ? tag.id : null)}
                    >
                        {tag.name}
                    </Tag.CheckableTag>
                ))}
            </Flex>
        </React.Fragment>
    );
});

export default Brands;
