import Http from './http';

// 服务模块中的方法，应执行纯粹的数据请求
export default {
    test () {
        return Http.$get('baidu.com', {}, 1);
    },
    getDict() {
        return Http.$get('/app_web_cheap/CommDictController/getDictList');
    },
    getPermission(params) {
        return Http.$get('/isz_base/CommController/power.action', params);
    },
    authLogin(params) {
        return Http.$post('/isz_base/LoginController/auth.action', params);
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
};