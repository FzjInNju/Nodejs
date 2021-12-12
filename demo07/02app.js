// 判断服务器上有没有upload目录，如果没有这个目录，就创建
const fs = require('fs');
fs.stat('./upload',(err,data)=>{
    if(err){
        mkdir('./upload');
    }
    if(data.isDirectory()){
        console.log('upload目录存在');
    }else{
        // 删除文件，再创建文件夹
        fs.delete('./upload',(err)=>{
            console.log(err);
            return;
        })
        mkdir('./upload');
    }
})


function mkdir(dir){
    fs.mkdir('./upload',(err)=>{
        if(err){
            console.log(err);
            return;
        }
    })
}


