const ex = require('./express')

const app =ex.getstart()

app.get('/',(req,res)=>{
    res.end('hello')
})

//post请求
app.post('/user',(req,res)=>{
    res.end('post')
})
//put请求
app.put('/stu',(req,res)=>{
    res.end('put')
})
//delete
app.delete('/login',(req,res)=>{
    res.end('delete')
})