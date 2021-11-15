const re = require('./mogo')
const db =re.creatData('demo',{
    name:String,
    age:Number,
    gender:{
        type:String,
        default:'男'
    },
},'num')

//创建文档
const stu = new db({
    name:'lul',
    age:20,
    gender:'女'
})

//存储在数据库中
stu.save()

db.findOne({},(err,doc)=>{
    if(!err){
        doc.name = 'fxl'
    }
    console.log(doc.id)
})

