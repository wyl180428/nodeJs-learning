const fs = require('fs')

exports.errFile = function (){
    return new Promise((res,rej)=>{
        fs.readFile('./day11/day1101/static/404.html',(err,data)=>{
            if(err){
                rej(err)
            }else {
                res(data)
            }
        })
    })

}

exports.errFileName = function (extname){
    return new Promise((res,rej)=>{
        fs.readFile('./day11/day1101/data/mime.json',(err,data)=>{
            if(err){
                rej(err)
            }else {
                let myObj =JSON.parse(data.toString())
                res(myObj[extname])
            }
        })
    })
}