'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1502286877591_2357';

  // 使用egg-scripts start运行时会读取
  config.cluster = {
    listen: {
      port: '7008',
      hostname: '127.0.0.1'
    }
  };

  config.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: '192.168.1.123',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: '123456',
    // 数据库名
    database: 'ghost_db',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};

  // add your config here

  return config;
};
