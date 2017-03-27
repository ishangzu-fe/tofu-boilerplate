import { Http } from 'tofu-lib';

const http = new Http();

export default {
    getDict() {
        if (!window['dict']) {
            return http.$get('/app_web_cheap/CommDictController/getDictList');
        }
    },
    getPermission(params) {
        if (!window['permission']) {
            return http.$get('/isz_base/CommController/power.action', params);
        }
    },
    authLogin(params) {
        return http.$post('/isz_base/LoginController/auth.action', params);
    },
    oldAuth(params) {
        return http.$get('/sysauth', params)
    },
    getOldMenus() {
        return http.$get('/navigation?systemCode=AppService');
    },
    logout() {
        return http.$get('/isz_base/LoginController/logout.action');
    },
    getMenus(params) {
        return http.$get('/isz_base/CommController/treeMenu.action', {
            res_category: 'APPCLIENT'
        });
    }
}