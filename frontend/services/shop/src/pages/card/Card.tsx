import React from 'react';
import {observer} from 'mobx-react-lite';
import {Breadcrumb, Button, Result} from 'antd';
import {Link} from 'react-router-dom';
import CardProducts from '@/pages/card/CardProducts';
import TotalPrice from '@/pages/card/TotalPrice';
import AuthPages from "@/hooks/AuthPages";

const Card = observer(() => {
    return (
        <React.Fragment>
            <Breadcrumb
                items={[
                    {
                        title: <Link to={'/'}>{'Магазин'}</Link> ,
                    },
                    {
                        title: 'Корзина'
                    }
                ]}
            />
            <AuthPages>
                <React.Fragment>
                    <CardProducts />
                    <TotalPrice />
                </React.Fragment>
            </AuthPages>
        </React.Fragment>
    )
})

export default Card;
