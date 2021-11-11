//判断文件中是否有upload目录，如果没有就创建该目录
/*
const fs = require('fs')
const p = './upload'

fs.stat(p,(err,data)=>{
    if(err){
      //创建目录
        makeDir(p)
    }else {
        if(data.isFile()){
            fs.unlink(p)
            //创建目录
            makeDir(p)
        }else {
            console.log('目录已存在')
        }
    }
})

function makeDir(dir) {
    fs.mkdir(dir,err=>{
        console.log(err)
    })
}
*/

