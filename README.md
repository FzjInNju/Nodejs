# Nodejs
learning nodejs by examples
## 01 生成http服务（生成一个页面）
1. 输入node-http-server自动生成模板代码
2. 打开终端，输入node app.js运行程序
3. 根据端口打开浏览器（120.0.0.1/端口号）
4. 修改代码后重新运行：在终端ctrl+c结束的运行，重复第二步
## 02 安装supervisor
npm install -g supervisor
之后在终端运行程序时输入 supervisor app.js，修改代码直接保存可以刷新页面得到结果，不用node命令重新运行
## 03 模块
1. 放在node_modules文件夹下的文件包tools，其中的index.js默认存放的是包中的函数，在common.js中可以直接通过request("tools");得到，不需要写地址
## 04 npm下载包到本地
1. https://www.npmjs.com/ 查找需要的包
2. 进入项目主目录，在终端npm install [包名]，包和相应的package.json就引入进来了。

3. 将代码发给别人时，不需要包含node_module，只需要保留package.json，该文件中有"dependencies": {"md5": "^2.3.0"}，能知道该项目运行需要依赖的包，可以手动npm install md5， 也可以直接==npm i==