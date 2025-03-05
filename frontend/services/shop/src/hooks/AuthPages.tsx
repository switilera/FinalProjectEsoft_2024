import React from 'react';
import {observer} from "mobx-react-lite";
import GlobalStore from "@/state/globalStore";
import Forbidden from "@/pages/forrbiden/Forbidden";

const AuthPages = observer((props: props) => {
    const {children} = props;

    return GlobalStore.isAuth ? children : <Forbidden />;
});

interface props {
    children: React.ReactNode
}

export default AuthPages;
