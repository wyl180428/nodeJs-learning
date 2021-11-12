const http = require('http')
const fs = require('fs')
const path = require('path')

const m = require('./moudel')


http.createServer((req, res) => {
    let pathname = req.url
    pathname = pathname==='/'?'index.html':pathname
    if (pathname !== '/favicon.ico') {
        fs.readFile('./day11/day1101/static/' + pathname, async (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'})
                let a = await m.errFile()
                res.end(a)

            } else {
                let n = await m.errFileName(path.extname(pathname))
                res.writeHead(200, {'Content-Type': '' + n + ';charset="utf-8"'})
                res.end(data)
                // console.log(data)
            }
        })

        // res.end('hello world')
    }
}).listen(5000, () => {
    console.log('服务器开启成功');
})