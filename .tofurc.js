module.exports = {
    href: 'localhost',
    port: 8080,
    proxy: {
        '/app_web_cheap': {
            target: 'http://192.168.0.76/app_web_cheap',
            changeOrigin: true,
            pathRewrite: function (path) {
                return path.replace('/app_web_cheap', '');
            }
        },
        '/isz_base': {
            target: 'http://sys.ishangzu.com/isz_base',
            changeOrigin: true,
            pathRewrite: function (path) {
                return path.replace('/isz_base', '');
            }
        }
    },
    updateList: [ // 需要更新的文件
        'src/router/index.js',
        'src/service/http.js',
        'src/views/login',
        'src/views/portal',
        'src/App.vue',
        'src/main.js',
        'src/main.scss',
        'static',
        '.gitignore',
        'package.json',
        'tpl.html',
        '.eslintrc.js',
        '.tofurc.js', // 升级模板时，将会强制更新本文件
        '!.babelrc', // 前缀为 '!' ，代表将会被删除
    ],

    _meta: { // 请勿删除
        type: 'PC', // 模板类型
        version: '1.0.0', // 模板的版本
    }
};
