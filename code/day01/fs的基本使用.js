const fs = require('fs')

//检测文件还是目录
fs.stat('./html',(err,data)=>{
    if(err){
        console.log(err)
    }else {
        console.log(data.isFile())  //是否为文件
        console.log(data.isDirectory());//是否为目录
    }
})

//创建目录
fs.mkdir('./css',err=>{
    if(err){
        console.log(err)
    }else {
        console.log('创建成功')
    }
})

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
        console.log(data.toString()) //把Buffer转换成字符串类型
    }
})

//追加文件
fs.appendFile('./css/base.css','body{color:red}\n',err=>{
    if(err){
        console.log(err)
    }
})

//读取目录
fs.readdir('./css',(err,data)=>{
    if(err){
        console.log(err)
    }else {
        console.log(data)
    }
})

//重命名
fs.rename('./css/base.css','./css/index.css',err=>{
    if(err){
        console.log(err)
    }
})

//删除目录
fs.rmdir('./html',err=>{
    if(err){
        console.log(err)
    }
})

//删除文件
fs.unlink('./css/index.css',err=>{
    if(err){
        console.log(err)
    }
})