const ex = require('./express')

const app = ex.getstart()

app.get('/', (req, res) => {
    //请求对象
    // console.log(req.url) //请求路径
    // console.log(req.method);//请求方式
    // console.log(req.headers);//请求头

    //响应对象
    // res.statusCode()  //设置响应
    res.send({
        uname:'wyl',
        age:18
    }).status(201)
    // res.end('hello')
})