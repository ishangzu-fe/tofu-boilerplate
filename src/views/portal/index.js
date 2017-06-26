import tpl from './index.html';
import './index.scss';

import Promise from 'es6-promise';
import Config from 'config';

import dropdownUser from './components/user_info';
import CommonServices from 'service/common';

export default {
    template: tpl,

    name: 'portal',

    components: {
        'i-dropdown-user': dropdownUser
    },

    data() {
        return {
            title: Config.title,
            cascaderActive: false,
            loading: true,
            menuConfig: {
                useRouter: true,
                menus: [
                    { label: '示例', imgSrc: '/static/content.png', children: [
                        { label: '示例一', path: '/system/example_1' },
                        { label: '示例二', path: '/system/example_2'},
                        { label: '示例三', path: '/system/example_3' }
                    ] }
                ]
            },
            tabConfig: {
                useRouter: true,
                autoRestore: true,
                style: {
                    width: '116px'
                }
            },
            userDropdownConfig: {
                trigger: false
            },
            options: []
        };
    },

    methods: {
        /**
         * 触发激活菜单的事件时，打开一个Tab
         */
        openTab(menu) {
            let tab = {};
            tab.path = menu.path;
            tab.label = menu.label;

            this.$tab.createTab(tab);
        },

        /**
         * 切换下拉菜单
         */
        switchUserDropdown(status) {
            if (status === 'open') {
                this.userDropdownConfig.trigger = true;
            } else {
                this.userDropdownConfig.trigger = false;
            }
        },

        /**
         * 获取菜单
         */
        getMenus () {
            CommonServices.getMenus({ res_category: 'APPCLIENT' }).then(res => {
                if (res.code === 0) {
                    this.menuConfig.menus = this.menuConfig.menus.concat(this.traverseMenu(res.obj));
                } else if (res.code === -9999) {
                    this.$message.error(res.msg);
                } else {
                    this.$message.error('获取菜单失败！');
                }
            });
        },

        traverseMenu(menus, prefix = '') {
            return menus.map(menu => {
                let rst = {
                    id: menu.id,
                    label: menu.text
                };

                if (level === 0) rst.imgSrc = '/static/content.png';
                if (menu.children) {
                    rst.children = this.traverseMenu(menu.children, menu.attributes.match(/^(\/[a-zA-Z]+\_[a-zA-Z]+|\/.*\/).+$/)[1], level + 1);
                } else {
                    if (level !== 0) {
                        rst.path = menu.attributes.replace(prefix, ''); // 部分替换成 ''
                    } else {
                        rst.path = '/system' + menu.attributes;
                    }
                }

                return rst;
            });
        },

        /**
         * 获取部门
         */
        getDeparts() {
            CommonServices.getDeparts().then(res => {
                if (res.code === 0) {
                    this.options = res.obj.map(city => {
                        return {
                            value: city.code,
                            label: city.name,
                            children: this.transformDepart(city.sysDepartList)
                        };
                    });
                } else {
                    this.$message.error(res.msg);
                }
            });
        },

        transformDepart (departs) {
            if (!departs) return;

            return departs.map(depart => {
                return {
                    value: depart.code || depart.dep_id,
                    label: depart.name || depart.dep_name,
                    children: this.transformDepart(depart.sysDepartList)
                };
            });
        }
    },

    beforeCreate () {
        Promise.all([CommonServices.getDict(), CommonServices.getPermission({
            res_category: 'APPCLIENT'
        })]).then(res => {
            console.group('字典与权限');
            if (res[0].code === 0) {
                window.dict = res[0].obj;
                console.log('字典：', window.dict);
            }

            if (res[1].code === 0) {
                window.permission = res[1].obj;
                console.log('权限：', window.permission);
            }
            console.groupEnd();
        });
    },

    created() {
        // 获取菜单并进行转换
        this.getMenus();
        this.getDeparts();
    },

    mounted() {
        // 实现城市部门级联选择器点击或悬浮效果
        this.$refs.cascader.$el.addEventListener('click', (e) => {
            if (!this.cascaderActive) {
                if (this.$refs.cascader.$el.children[0].children[2] === e.target) {
                    this.cascaderActive = false;
                    return;
                }
            }
            this.cascaderActive = !this.cascaderActive;
        }, true);
        document.addEventListener('click', (e) => {
            this.cascaderActive = false;
        });
    }
};