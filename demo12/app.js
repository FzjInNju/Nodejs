const http = require('http');
const routes = require('./module/routes.js');
const ejs = require('ejs');
const url = require('url');


http.createServer(function (req, res) {
    // 创建静态web服务
    routes.static(req,res,'static');

    // 路由
    let pathname = url.parse(req.url).pathname;

    if(pathname == '/login'){
        let msg = "数据库里面获取的数据";
        ejs.renderFile("./views/login.ejs",{msg:msg},(err,data)=>{
            res.writeHead(200,{'Content-Type': 'text/html;charset="utf-8"'});
            res.end(data);
        });
        res.writeHead(200,{'Content-Type':'text/html;charset = "UTF-8"'});
        res.end("login");
    }else if(pathname == '/register'){
        res.writeHead(200,{'Content-Type':'text/html;charset = "UTF-8"'});
        res.end("login");
    }else if (pathname == '/admin'){
        res.writeHead(200,{'Content-Type':'text/html;charset = "UTF-8"'});
        res.end("处理后端业务逻辑");
    }else {
        res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});  
        res.end('404这个页面不存在');  
    }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');