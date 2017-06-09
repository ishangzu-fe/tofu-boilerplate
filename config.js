const path = require('path');

module.exports = {
    mock: false,
    title: '%logo%',
    devPort: 8080,
    devProxy: {
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
    }
};
