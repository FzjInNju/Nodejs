const fs = require('fs');
const path = require('path');
const url = require('url');

exports.getMime = function (extname) {

    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';

    }

}

let getFileMime = function (extname) {

    // 将以下方法改成同步方法
    // return new Promise((resolve, reject) => {
    //     fs.readFile('./data/mime.json', (err, data) => {
    //         if (err) {
    //             console.log(err);
    //             reject(err);
    //             return;
    //         }
    //         let mimeObj = JSON.parse(data.toString());
    //         // console.log(mimeObj[extname]);
    //         resolve(mimeObj[extname]);

    //     })
    // })
    var data = fs.readFileSync('./data/mime.json');
    let mimeObj = JSON.parse(data.toString);
    return mimeObj[extname];

}

exports.static = function (req, res, staticPath) {
    //*1. 获取地址
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html' : pathname;
    let extname = path.extname(pathname);
    //*2、通过fs模块读取文件
    if (pathname != '/favicon.ico') {
        try{
            let data = fs.readFileSync('./' + staticPath + pathname)
            // 在有路由操作时，找不到文件时，需要继续找，看它对不对应路由操作
            // 所以下面代码要在找不到文件也找不到路由的情况下再执行，而不是在找不到文件时就执行
            //   下面的getFileMime要变成同步的，不然影响判断
            // if(err){                
            //     res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});  
            //     res.end('404这个页面不存在');               
            // }
    
            // 如果没有错误（找到了文件），则加载文件
            if (data) {
                let mime = getFileMime(extname);
                res.writeHead(200, {
                    'Content-Type': '' + mime + ';charset="utf-8"'
                });
                res.end(data);
            }
            // 如果有错误（没有找到文件），则判断是否是路由
            // 以下操作在app.js中
        }catch(e){
            console.log("错误");
        };

    }

}