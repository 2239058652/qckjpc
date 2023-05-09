# 项目名称：qc-web（web 端项目）

## 使用技术及框架

### 基础

以 vben-admin-thin-next-main 开源代码为基础进行开发。主要使用技术：vue3、axios、vue-router、vuex ant-design-vue

### 已实现技术点

主题切换、多国语言

### 已封装

错误提示、弹出信息 http 请求、响应结果处理身份验证、token 存储及携带时间、日期统一处理：转换、格式化文件上传

## 项目运行步骤

1. 安装依赖包

```
yarn
```

2. 调试运行

```
yarn dev
```

3. 编译发布

```
yarn build
```

## 开发配置要求

### VSCode 设置保存时自动格式化

1. 打开设置“Settings”，点击“Open Setting(JSON)”图标；
2. 在打开的“setting.json”文件中输入如下代码

```
    "editor.formatOnType": true,
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true
```

### git 提交配置

1. 请勿修改项目中的“.gitignore”文件；
2. 使用 prettier 格式化代码;
3. 提交代码时检查不通过时跳过代码检查 commit 命令：

```
    git commit --no-verify -m “提交备注”
    git commit -n -m “提交备注”
```

4. commit 成功后使用 push 命令：

```
    git push
```

## 项目开发规范

### 项目结构说明

```
QC-WEB
├── build # 打包脚本相关
│   ├── config # 配置文件
│   ├── generate # 生成器
│   ├── script # 脚本
│   └── vite # vite配置
├── mock # mock文件夹
├── assets # 静态资源目录，包含图片、ico、js等
│   ├── geojson # geo相关js文件数据
│   ├── icons # icon sprite 图标文件夹
│   ├── images # 项目存放图片的文件夹
│   ├── resource # 第三方js库所需资源
│   ├── svg # svg文件
├── src # 主目录
│   ├── api # 接口文件
│   ├── components # 公共组件
│   ├── design # 样式文件
│   ├── directives # 指令
│   ├── enums # 枚举/常量
│   ├── hooks # hook
│   │   ├── component # 组件相关hook
│   │   ├── core # 基础hook
│   │   ├── event # 事件相关hook
│   │   ├── setting # 配置相关hook
│   │   └── web # web相关hook
│   ├── layouts # 布局文件
│   │   ├── default # 默认布局
│   │   ├── iframe # iframe布局
│   │   └── page # 页面布局
│   ├── locales # 多语言
│   ├── logics # 逻辑
│   ├── main.ts # 主入口
│   ├── router # 路由配置
│   ├── settings # 项目配置
│   │   ├── componentSetting.ts # 组件配置
│   │   ├── designSetting.ts # 样式配置
│   │   ├── encryptionSetting.ts # 加密配置
│   │   ├── localeSetting.ts # 多语言配置
│   │   ├── projectSetting.ts # 项目配置
│   │   └── siteSetting.ts # 站点配置
│   ├── store # 数据仓库
│   ├── utils # 工具类
│   └── views # 页面
├── test # 测试
│   └── server # 测试用到的服务
│       ├── api # 测试服务器
│       ├── upload # 测试上传服务器
│       └── websocket # 测试ws服务器
├── types # 类型文件
├── vite.config.ts # vite配置文件
└── windi.config.ts # windcss配置文件
```

### 项目开发说明
