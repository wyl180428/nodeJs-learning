const http = require('http')
//1.创建server
const server = http.createServer()

//2.监听server的request请求事件
server.on('request',function (req,res){  //req表示客户端传来的信息
    const url = req.url
    //设置响应头
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"}) //解决乱码
    if(url==='/'){
        res.end('<div>hello</div>')
    }else {
        res.end('404 not found')
    }
})

//3.绑定端口
server.listen(3000,function (){
    console.log('服务器连接成功')
})