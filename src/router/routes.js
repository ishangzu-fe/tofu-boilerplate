import config from 'config';

import Portal from 'portal';
import Auth from 'portal/auth';
import Dashboard from 'views/dashboard';

let routes = [
    { path: '/', redirect: '/system/dashboard' },
    { path: '/auth/:token', component: Auth },
    { path: '/system', component: Portal, children: [
        { path: 'dashboard', component: Dashboard }
    ] }
];

export default routes;