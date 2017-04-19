import Http from 'tofu-http';
import config from 'config';

const http = new Http(config.mock, data => {
    window['sessionFlg'] = window['sessionFlg'] || 'Y';
    if ((data.code === 201 || data.code === 200) && sessionFlg === 'Y') {
        sessionFlg = 'N';
        alert('用户已失效，请重新登录！');
        window.location.href = 'http://sys.ishangzu.com';
        return;
    } else if (data.code === 0) {
        sessionFlg = 'Y';
    }
    return data;
});

export default http;