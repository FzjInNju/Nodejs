// 判断目录
const fs = require('fs');
fs.stat('./html',(err,data)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log(`是文件：${data.isFile()}`);
    console.log(`是目录：${data.isDirectory()}`);
});

//创建目录
/*
fs.mkdir('./css',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("创建成功");
})*/

// 创建以及写入文件
// 如果文件已经存在，直接替换其中内容
/*
filename
data
options
    encoding
    
*/
fs.writeFile('./html/index.html','你好nodejs',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("创建写入文件成功");
})


/*
追加文件内容
 */
fs.appendFile('./css/base.css','\nh1{color:red}',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('appendFile 成功');
})


/**
 * 读文件，回调函数中data是二进制数据（buffer），需要用
 * toString()转化
 */
fs.readFile('./html/index.html',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
})

/**
 * 
 * 读文件目录
 */
fs.readdir('./html',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    
})

fs.rename('./css/index/css','./html/index.css',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("移动文件成功");
})


/**
 * 删除文件
 */
fs.unlink('./aaaa/index.html',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除文件成功');
})

/**
 * 删除文件夹
 * 前提是把文件夹中的内容全部删除再删除这个文件夹
 */
fs.rmdir('./aaaa',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除目录成功');
})
