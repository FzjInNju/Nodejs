/**
 * 1. let  const的使用
 * 2. 模板字符串的使用
 * 3. 方法及属性的简写
 * 4. 箭头函数：改变this指向，指向了上下文
 */

// let const块作用域，var整体作用域（少用）

// 模板字符串
var name = "zhangsan";
console.log(`myname is ${name}`);

//方法以及属性的简写
var app = {
    name: "zhangsan",
    run() {
        console.log("sdf");
    }
};
console.log(app.name);



// 外部获取异步方法中的数据
// 方法一：传入回调函数作为参数，如下，控制台打印name的值
function getData(f) {
    //ajax
    // setTimeout是window的方法，在指定的数毫秒后调用函数或计算表达式
    // setTimeout(js函数/要执行的代码, 等待的毫秒数)
    setTimeout(function () {
        var name = 'zhangsan';
        f(name);
    }, 1000);
}
getData(function (aaa) {
    console.log(aaa);
})
// 方法二：Promise来处理异步，resolve成功的回调函数，reject失败的回调函数
// var p = new Promise(function(resolve, reject){
//     setTimeout(function(){d
//         var name = '战三';
//         resolve(name);
//     },1000);
// })
// p.then(function(data){
//     console.log(data);
// });
// 将new Promise中的函数封装一下有
function getData(resolve, reject) {
    setTimeout(function () {
        var name = '战三';
        resolve(name);
    }, 1000);
}
var p = new Promise(getData);
p.then(data => {
    console.log(data);
});


