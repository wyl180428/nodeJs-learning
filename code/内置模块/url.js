const url = require('url')

// const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'

//解析url
// console.log(url.parse(urlString))

//反解析
const urlObj =  {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com:443',
    port: '443',
    hostname: 'www.baidu.com',
    hash: '#tag=3',
    search: '?id=2',
    query: 'id=2',
    pathname: '/path/index.html',
    path: '/path/index.html?id=2',
    href: 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
}
console.log(url.format(urlObj))

//resolve
console.log(url.resolve('https://www.abc.com/a','../')) //返回上一级
console.log(url.resolve('https://www.abc.com/a','/b')) //


