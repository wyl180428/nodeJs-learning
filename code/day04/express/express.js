const express = require('express')
exports.getstart = function () {
    const app = express()
    //解析post表单json数据
    app.use(express.json())
    //解析post表单x-www-form-urlencoded
    app.use(express.urlencoded())
    app.listen(5000, () => {
        console.log('服务开启成功')
    })
    return app
}