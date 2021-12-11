// 引入http模块
const http = require('http');

// 通过.createserver创建服务
// request获取客户端传入的信息
// reponse 给浏览器响应信息
http.createServer(function (request, response) {
     // 设置响应头
    // 状态码是200，文件类型是html，字符集是utf-8
    res.writeHead(200,{"content-type":"text/html;charset = 'utf-8'"});
    // 解决中文乱码问题
    res.write('<head><meta charset="utf-8"></head>');
    res.write("你好\n");
    // 给页面上面输出一句话并结束响应
    response.end('Hello World');
}).listen(8081);   // 端口，3000以上，避免和应用冲突

console.log('Server running at http://127.0.0.1:8081/');