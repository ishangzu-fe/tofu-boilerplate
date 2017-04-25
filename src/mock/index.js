import Number from './number';
import config from 'config';

// 请在根目录下配置是否使用 mock 环境
if (!config.mock) {
    fetchMock.restore();
}

// 使用 fetch-mock 模块来进行请求的拦截
// 文档请参考 http://www.wheresrhys.co.uk/fetch-mock/api
const fetchMock = require('fetch-mock');

// 匹配模式，拦截指定的请求
fetchMock.mock('*', {
    a: Number.test
});
