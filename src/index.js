//在eslintrc.js的rules中禁用了console这个对象的部分方法(例如console.log()），也就是在这个工程中都不能用这个方法
//但是有时又想临时解禁

console.info("ff");
// console.log('mm');//这句会报错

//加上下面这个注释就可以使下面代码继续使用(在eslint的rules中被禁用的方法)，不加no-console,就是所有禁用方法都可以使用
/*eslint-disable no-console*/
console.log("ff");
//下面这句又把eslint禁用的规则恢复了，下面写的代码又会禁用rules中规定的禁用方法
/*eslint-enable*/

//下面这个是只对单行解禁
console.log("ff");//eslint-disable-line
//eslint-disable-next-line
console.log("ff");
//console.log('ff');//这句又会报错，因为上面那两句只是单行解禁

var m = 1;
if (m > 0) {
var mm = 1;
    console.info(mm);
}






