import config from 'config';

import Portal from 'portal';
import Auth from 'portal/auth';
import Dashboard from 'views/dashboard';

import Example_1 from 'views/example/example_1';
import Example_2 from 'views/example/example_2';
import Example_3 from 'views/example/example_3';

let routes = [
    { path: '/', redirect: '/system/dashboard' },
    { path: '/auth/:token', component: Auth },
    { path: '/system', component: Portal, children: [
        { path: 'dashboard', component: Dashboard },
        { path: 'example_1', component: Example_1 },
        { path: 'example_2', component: Example_2 },
        { path: 'example_3', component: Example_3 }
    ] }
];

export default routes;