import React from 'react';
import './App.module.scss';
import LayoutContainer from '@/layout/Layout';
import '@packages/shared/src/styles/theme.scss';

export const App: React.FC = () => {
    return (
        <LayoutContainer />
    );
};
