import React from 'react';
import {Menu, Typography} from "antd";
import s from './Sidebar.module.scss'
import {observer} from 'mobx-react-lite';
import WatchStore from '@/state/watchStore';

const {Text} = Typography;

const Navigation = observer(() => {
    const items = WatchStore.watchType.map(({id, name}) => {
        return {key: id, label: name}
    })

    return (
        <div>
            <Text className={s.text}>
                {"Каталог"}
            </Text>
            <Menu
                onClick={({key}) => WatchStore.setFilterType(Number(key))}
                theme="dark"
                mode="inline"
                items={items}
                selectedKeys={[`${WatchStore.filterType}`]}
            />
        </div>
        );
    }
);

export default Navigation;
