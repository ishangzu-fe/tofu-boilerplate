import Number from './number';

// 使用 fetch-mock 模块来进行请求的拦截
// 文档请参考 http://www.wheresrhys.co.uk/fetch-mock/api
const fetchMock = require('fetch-mock');

fetchMock.mock('*', {
    a: Number.test
});

// 取消 mock
// fetchMock.restore();