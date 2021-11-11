const query = require('querystring')

console.log(query.parse('type=iphone11&num=70&ipod=true'))//将字符串转换成对象

const qs = query.stringify({   //查询字符串对象转换成字符串
    type: 'iphone',
    num: 140,
    ipod: true,
    itunes: '    sss  '
}, '赠送', '!==', { encodeURIComponent: true })//把特殊的字符转为%形式的
console.log(qs)