import React from 'react';
import {createBrowserRouter, Route, Routes} from "react-router-dom";
import LayoutContainer from "@/layout/Layout";
import Shop from "@/pages/shop/Shop";
import Card from "@/pages/card/Card";
import SingleProduct from "@/pages/singleProduct/SingleProduct";

const routes = [
    {
        path: "/",
        element: (<LayoutContainer />),
        children: [
            {
                path: '/',
                element: <Shop />
            },
            {
                path: 'device/:id',
                element: <SingleProduct />
            },
            {
                path: '/card',
                element: <Card />
            }
        ]
    }
]

export const router = createBrowserRouter(routes);

export default routes



