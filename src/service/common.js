import Http from './http';

export default {
    test () {
        return Http.$get('baidu.com', {}, 1);
    },
    getDict() {
        if (!window['dict']) {
            return Http.$get('/app_web_cheap/CommDictController/getDictList');
        }
    },
    getPermission(params) {
        if (!window['permission']) {
            return Http.$get('/isz_base/CommController/power.action', params);
        }
    },
    authLogin(params) {
        return Http.$post('/isz_base/LoginController/auth.action', params);
    },
    oldAuth(params) {
        return Http.$get('/sysauth', params)
    },
    getOldMenus() {
        return Http.$get('/navigation?systemCode=AppService');
    },
    logout() {
        return Http.$get('/isz_base/LoginController/logout.action');
    },
    getMenus(params) {
        return Http.$get('/isz_base/CommController/treeMenu.action', {
            res_category: 'APPCLIENT'
        });
    }
}