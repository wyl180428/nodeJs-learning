//使用require方法加载fs模块
const fs = require('fs');
//写入文件
fs.writeFile('data>.txt','hello css',function (err) {
    console.log(err)
})
//读取文件
fs.readFile('data.txt',function (error,data) {  //第一个参数是文件地址，第二个为回调函数
    // console.log(data.toString())
    if(error){
        console.log(error)
    }else {
        console.log(data.toString())
    }
})