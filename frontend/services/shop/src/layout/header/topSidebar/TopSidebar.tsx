import React from 'react';
import style from './TopSidebar.module.scss';
import CurrentTime from '@/layout/header/topSidebar/CurrentTime';

const TopSidebar: React.FC = () => {
    return (
        <div className={style.topSidebar}>
            <CurrentTime />
        </div>
    );
};

export default TopSidebar;
