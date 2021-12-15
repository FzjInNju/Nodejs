/**
 * async是异步的缩写，让一个方法变成异步
 * await是async+wait，等待一个异步方法执行完成
 *    await必须用在async方法中
 */
// 错误：因为await必须用在async方法中
// async function test(){
//     return 'nihao nodejs';
//     // 此时’nihao nodejs‘被包装成Promise{'nihao nodejs'}
// }
// console.log(await test());

// 声明异步方法
async function test(){
    return 'nihao nodejs';
}
async function main(){
    var data = await test();
    console.log(data);
}
main();




async function test(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            var name = 'zhangsan';
            resolve(name);
        },1000);
    })
}
async function main(){
    var data = await test();
    console.log(data);
}
main();