const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.end('Hello World')
})

app.listen(5000,()=>{
    console.log('服务开启成功')
})