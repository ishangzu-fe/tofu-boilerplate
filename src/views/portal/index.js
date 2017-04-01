import tpl from './index.html';
import './index.scss';

import Config from 'config';

import dropdownUser from './components/dropdown_user';
import CommonServices from 'service/common';

import { TabManager } from 'i-tofu';

export default {
    template: tpl,

    name: 'portal',

    components: {
        'i-dropdown-user': dropdownUser
    },

    data() {
        return {
            title: Config.title,
            currentCity: '杭州',
            loading: true,
            menuConfig: {
                useRouter: true,
                menus: [
                    { label: '示例', children: [
                        { label: '示例一', path: '/system/example_1' },
                        { label: '示例二', path: '/system/example_2', children: [
                            { label: '示例三', path: '/system/example_3' }
                        ] }
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
                dpConfig: {
                    trigger: false
                },
                panelConfig: {
                    avatar: '/static/assets/avatar.50e4091.png',
                    name: 'Gertrude Klein',
                    phone: 13978894856767
                }
            },
            cityData: [
                {
                    name: '杭州',
                    value: 'hangzhou'
                },
                {
                    name: '南京',
                    value: 'nanjing'
                },
                {
                    name: '苏州',
                    value: 'suzhou'
                },
                {
                    name: '上海',
                    value: 'shanghai'
                }
            ]
        };
    },

    methods: {
        changeCity(name) {
            if (this.currentCity === name) {
                return;
            }
            this.currentCity = name;
        },

        /**
         * 触发激活菜单的事件时，打开一个Tab
         */
        openTab(menu) {
            let tab = {};
            tab.path = menu.path;
            tab.label = menu.label;

            TabManager.openTab(tab);
        },

        /**
         * 切换下拉菜单
         */
        switchUserDropdown(status) {
            if (status === 'open') {
                this.userDropdownConfig.dpConfig.trigger = true;
            } else {
                this.userDropdownConfig.dpConfig.trigger = false;
            }
        },

        extractMenu(menu) {
            this.menuConfig.menus.unshift(this.traverseMenu(menu, menu[0].attributes)[0]);
        },

        traverseMenu(arr, prefix) {
            return arr.map(v => {
                let obj = {
                    id: v.id,
                    label: v.text
                };

                if (v.children) {
                    obj.children = this.traverseMenu(v.children, prefix);
                } else {
                    obj.path = v.attributes;
                }

                return obj;
            });
        }
    },

    beforeCreate() {
        // 获取菜单并进行转换
        CommonServices.getMenus().then(res => {
            if (res.code === 0) {
                this.extractMenu(res.obj);
            } else if (res.code === -9999) {
                this.$message.error(res.msg);
            } else {
                this.$message.error('获取菜单失败！');
            }
        });
    }
};