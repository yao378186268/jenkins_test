import axios from 'axios';

const server = axios.create({
  timeout: 60000,
  baseURL: '/dmp',
});

server.interceptors.request.use(config => {
  console.log(config);

  return config;
});

class request {
  constructor() {}

  GET(url: string, params?: object, config?: object) {
    return server.get(url, {
      params,
      ...config,
    });
  }
}

export default new request();
