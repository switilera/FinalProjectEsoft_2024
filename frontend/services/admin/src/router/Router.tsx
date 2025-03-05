import {App} from '@/components/App';
import {createBrowserRouter} from 'react-router-dom';
import {Admin} from '@/pages/admin';
import {Suspense} from 'react';

const routes = [
    {
        path: "/",
        element: (<App />),
        children: [
            {
                path: '/admin',
                element: (
                    <Suspense fallback={'Loading...'}>
                        <Admin />
                    </Suspense>
                )
            }
        ]
    }
]

export const router = createBrowserRouter(routes);

export default routes
