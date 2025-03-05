import React from 'react';
import {Button, Result} from "antd";
import GlobalStore from "@/state/globalStore";

const Forbidden = () => {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Для просмотра корзины необходимо авторизоваться."
            extra={(
                <Button type="primary" onClick={() => GlobalStore.setIsShowAuthModal(true)}>
                    {'Авторизоваться'}
                </Button>
            )}
        />
    );
};

export default Forbidden;
