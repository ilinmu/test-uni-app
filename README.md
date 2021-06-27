# 项目说明

## 部分目录介绍

`config` 目录用来存放项目的配置项。
例如配置全局的菜单，可以新建 `config/menu.js`， 全局的图表设置，可以新建 `config/echarts.js`，针对具体页面的配置可以新建 `config/login.js`，依此类推。

`utils` 目录用来存放项目的公用方法。
例如 `utils/request.js`。全局公用格式化方法可以新建 `utils/format.js`，针对具体页面的公用方法可以新建 `utils/login.js`，依此类推。

`api` 目录用来存放请求接口文件，以具体页面为文件名。可以提取公用接口放至 `api/common.js` 文件中。

`store` 目录用来各页面的 `vuex` 数据。
