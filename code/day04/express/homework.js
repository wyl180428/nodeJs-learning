const ex = require('./express')
const mongo = require('../../day03/Mongoose/mogo')

const app = ex.getstart()


const db = mongo.creatData('demo', {
    tid: Number,
    things: String
}, 'todolist')


function sentText(query, rules, res) {
    db.find(query, rules, function (err, doc) {
        if (!err) {
            if(!doc){
                res.send(doc)
            }else {
                res.status(404).end('参数传入错误')
            }
        } else {
            console.log(err)
        }
    })
}

//获取任务列表
app.get('/todo', (req, res) => {
    const id = req.query.id - 0
    if (!isNaN(id)) {
        sentText({tid: id}, '-_id -__v', res)
    } else {
        sentText({}, '-_id -__v', res)
    }
})

//添加任务
app.post('/todos',(req,res)=>{
    const data =req.body
    db.create(data,err=>{
        if(err){
            res.status(404).end('错误数据')
        }else {
            res.status(200).end('接收成功')
        }
    })
})

//修改任务
app.patch('/todos/:id',(req,res)=>{
    const d = req.body
    db.updateOne({tid:parseInt(req.params.id)},{$set:{things:d.things}},err=>{
        if(err){
            res.status(404).end('错误数据')
        }else {
            res.status(200).end('修改成功')
        }
    })
})

//删除任务
app.delete('/todo/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    db.remove({uid:id},err=>{
        if(err){
            res.status(404).end('错误数据')
        }else {
            res.status(200).end('删除成功')
        }
    })
})