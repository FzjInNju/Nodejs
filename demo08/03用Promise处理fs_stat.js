// 打印wwwroot中的文件夹
// 1. 定义一个isDir的方法判断一个资源到底是目录还是文件

// 操作文件系统的包
const fs = require('fs');
async function isDir(path){
    return new Promise(function(resolve, reject){
        // fs.stat是异步方法，所以用new Promise包装起来
        //方便之后用await获取fs.stat中生成的数据
        fs.stat(path, (err, stat) => {
            if(err) {
                console.error(err);
                reject(err);
                return ;
            }
            if(stat.isDirectory()) {
                resolve(true);
            }else{
                resolve(false);
            }
        })
    })
}
async function main(){
    var path = './wwwroot';
    var dirArr = [];
    fs.readdir(path,async function(err,data){
        if(err){
            console.log(err);
            return;
        }
        for(var i = 0; i < data.length; i++){
            if(await isDir(path + "/" + data[i])){
                dirArr.push(data[i]);
            }
        }
        console.log(dirArr);
    })
}
main();