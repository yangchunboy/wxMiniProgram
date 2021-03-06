# wxMiniProgram
### 支持功能

1. 配置vscode的插件支持less
2. 一个页面得分多个文件，wxml,wxss,json,js
3. 官方支持，有问题可以在官方找到解决方案
4. 支持npm
5. 支持es6
6. 支持redux


### 使用方法
```javascript
npm install
```
[vscode配置less支持](https://blog.csdn.net/weixin_44218060/article/details/103904095)；打包的时候配置了自动忽略less文件

[提高开发效率还可以安装vscode插件minapp](https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode)


[同时微信开发工具打开构建npm](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)
然后微信开发工具按下图配置

[微信开发工具配置.png](https://chuckboy.oss-cn-hangzhou.aliyuncs.com/github/wxMiniprogram/tool.png)


### 目录结构
```
api //填写各个api调用的封装方法，所有的请求都从这里出去
common //填写一些公共的方法或者配置文件
components //放多个页面都需要使用的组件
assets // 放一些静态资源例如图片
pages //存放页面的入口
  /page //每个页面的入口
    /components //当前页面可公用的组件
store // redux的文件存储
theme // 存放公共样式和制图颜色的less
```
### 参考文档
- [微信小程序开发指南](https://developers.weixin.qq.com/miniprogram/dev/)
- [微信小程序框架](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)
- [微信小程序工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)