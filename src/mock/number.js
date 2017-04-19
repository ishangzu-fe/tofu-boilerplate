// 使用 mockjs 来模拟数据
const Mock = require('mockjs');

// 根据模板来生成各种随机数据
// 参考：https://github.com/nuysoft/Mock/wiki/Syntax-Specification
export default {
    test: Mock.mock({
        'number1|1-100.1-10': 1
    })
};