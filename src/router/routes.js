import config from 'config';
import { main, primary } from 'views';

import Portal from 'portal';
import Auth from 'portal/auth';

let routes = [
    { path: '/', redirect: `${config.root}/dashboard` },
    { path: '/auth/:token', component: Auth },
    { path: config.root, component: Portal, children: [] }
];

const extractRoutes = (views) => {
    return Object.keys(views).map(key => {
        let children;
        let route = views[key];

        if (!route.self) {
            return { path: key, component: route };
        } else {
            let _children = route.children;
            if (_children && _children.length) {
                children = extractRoutes(_children);
            }

            return {
                children,
                path: key,
                component: route.self,
                meta: route.meta
            };
        }
        
    });
};

const children = extractRoutes(main);
const parent = extractRoutes(primary);

routes.forEach(v => {
    if (v.path === config.root) {
        v.children = children;
    }
});
routes = routes.concat(parent);

export default routes;