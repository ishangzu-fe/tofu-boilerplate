import Http from './http';

export default {
    /**
     * 获取数字字典
     */
    getDict () {
        return Http.$get('/app_web_cheap/CommDictController/getDictList');
    },

    /**
     * 获取权限
     */
    getPermission (params) {
        return Http.$get('/isz_base/CommController/power.action', params);
    },

    /**
     * 登录子系统
     */
    authLogin (params) {
        return Http.$post('/isz_base/LoginController/auth.action', params);
    },

    /**
     * 注销
     */
    logout () {
        return Http.$get('/isz_base/LoginController/logout.action');
    },

    /**
     * 获取菜单
     */
    getMenus (params) {
        return Http.$get('/isz_base/CommController/treeMenu.action', params);
    },

    /**
     * 获取城市与部门
     */
    getDeparts () {
        return Http.$get('/isz_base/CommController/selectCityDep.action');
    }
};
