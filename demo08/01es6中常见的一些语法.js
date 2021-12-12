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
    name,
    run(){
        console.log("sdf");
    }
};
console.log(app.name);

