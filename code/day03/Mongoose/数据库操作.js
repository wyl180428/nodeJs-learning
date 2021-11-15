const mongoose = require('mongoose')

main().catch(err=>console.log(err))

async function main(){
    //数据库的连接
    await mongoose.connect('mongodb://localhost:27017/test')
}



//创建Schema对象
const Schema = mongoose.Schema
const userSchema = new  Schema({
    name:String,
    age:Number,
    address:String,
    gender:String
})

//创建Model对象
const UserModel = mongoose.model('user',userSchema)
// UserModel.create({
//     name:'wyl',
//     age:18,
//     address:'hubei',
//     gender:'男'
// },(error =>{if(!error){
//     console.log('插入成功')
// }} ))

//查询
// UserModel.find({},'name age -_id',{limit:2,skip:1},(err,docs)=>{
//     if(!err){
//         console.log(docs[0].name)
//     }
// })

//修改
// UserModel.updateOne({name:'fxl'},{$set:{__v:0}},(err)=>{
//     if(!err){
//         console.log('成功')
//     }
// })

//删除
// UserModel.remove({name:'fxl'},error => {
//     if(!error){
//         console.log('成功')
//     }
// })


UserModel.find({},(err,docs)=>{
    if(!err){
        console.log(docs)
    }
})

