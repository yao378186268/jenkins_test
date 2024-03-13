import request from './request';

// 测试接口
export function testApi() {
  return request.GET('/api/console/customer/customers/list');
}

// 测试接口2
export function test2Api() {
  return request.GET('https://sponsors.vuejs.org/vite.json');
}
