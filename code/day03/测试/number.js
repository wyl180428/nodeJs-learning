const re = require('../Mongoose/mogo')

const db = re.creatData('demo',{
    num:Number
},'num')


// var n = []
//
// for(let i =1;i<=100;i++){
//     n.push({num:i})
// }
// db.create(n,(err)=>{
//     if(!err){
//         console.log('插入成功')
//     }
// })

// db.find({},(err,doc)=>{
//     if(!err){
//         console.log(doc)
//     }
// })

// db.find({num:{$gt:20,$lt:40}},'num -_id',{skip:3,limit:5},(err,doc)=>{
//     if(!err){
//         console.log(doc)
//     }
// })

// db.remove({n:null},err=>{
//     if(!err){
//         console.log('删除成功')
//     }

db.count({type:'nums'},(err,count)=>{
    if(!err){
        console.log(count)
    }
})