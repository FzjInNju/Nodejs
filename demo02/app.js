const http = require('http');
const url = require('url');
http.createServer((req,res)=>{
    console.log(req.url);   // 获取url
    
    // 设置响应头
    // 状态码是200，文件类型是html，字符集是utf-8
    res.writeHead(200,{"content-type":"text/html;charset = 'utf-8'"});
    // 解决中文乱码问题
    res.write('<head><meta charset="utf-8"></head>');

    console.log(req.url);   //获取浏览器访问的地址
    if(req.url != "/favicon.ico"){
        var userinfo = url.parse(req.url,true).query;
        console.log(userinfo);
        console.log(`姓名: ${userinfo.name}--年龄: ${userinfo.age}`);
    }
    res.end("你 nodejs"); // 结束响应
}).listen(8080);   // 3000以上，避免和应用冲突
