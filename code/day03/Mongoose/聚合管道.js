const s = require('./mogo')

let db = s.creatData('demo', {
    order_id: String,
    uid: Number,
    trade_no: String,
    all_price: Number,
    all_num: Number
}, 'order')

// db.create([{"order_id": "1", "uid": 10, "trade_no": "111", "all_price": 100, "all_num": 2},
//         {"order_id": "2", "uid": 7, "trade_no": "222", "all_price": 90, "all_num": 2},
//         {"order_id": "3", "uid": 9, "trade_no": "333", "all_price": 20, "all_num": 6}],
//     (err) => {
//         if (!err) {
//             console.log('order插入成功')
//         }
//     })
//


// db.aggregate([{
//     $project:{trade_no:1,all_price:1}   //字段显示
// },{
//     $match:{all_price:{$gte:90}}  //筛选
// },{
//     $sort:{all_price:1}  //排序
// }],(err,data)=>{
//     if(!err){
//         console.log(data)
//     }
// })


// db.remove({},(err)=>{
//     if(!err){
//         console.log('删除成功')
//     }
// })

let bd = s.creatData('demo', {
    order_id: String,
    title: String,
    price: Number,
    num: Number
}, 'order_item')

// bd.create([{"order_id": "1", "title": "商品鼠标 1", "price": 50, num: 1},
//     {"order_id": "1", "title": "商品键盘 2", "price": 50, num: 1},
//     {"order_id": "1", "title": "商品键盘 3", "price": 0, num: 1},
//     {"order_id": "2", "title": "牛奶", "price": 50, num: 1},
//     {"order_id": "2", "title": "酸奶", "price": 40, num: 1},
//     {"order_id": "3", "title": "矿泉水", "price": 2, num: 5},
//     {"order_id": "3", "title": "毛巾", "price": 10, num: 1}], err => {
//     if (!err) {
//         console.log('order_item插入成功')
//     }
// })

// bd.aggregate([{
//     $group: {_id: '$order_id', total: {$sum: '$num'}}  //分组
// }, {
//     $sort: {total: 1}
// }, {
//     $limit: 2
// },{
//     $skip:1
// }], (err, data) => {
//     if (!err) {
//         console.log(data)
//     }
// })

db.aggregate([{
    $lookup:{
        from:'order_items',
        localField:'order_id',
        foreignField:'order_id',
        as:'items'
    }
}],(err,data)=>{
    if(!err){
        console.log(data[0].items)
    }
})

