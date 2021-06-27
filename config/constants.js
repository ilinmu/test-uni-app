// 后端接口地址
const networkUrl = 'http://baidu.com';
// mock 地址
const mockUrl = 'http://mock.com';
// 是否使用 mock
const isMock = false;
// 是否是开发环境
const isDevelopment = process.env.NODE_ENV === 'development';
// 根据 mock 与否，决定使用哪个环境
export const targetUrl = (isMock && isDevelopment) ? mockUrl : networkUrl;
