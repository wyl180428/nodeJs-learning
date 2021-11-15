const mongoose = require("mongoose");
exports.creatData = function (dbname, rules, collname) {
    main().catch(err => console.log(err))

    async function main() {
        //数据库的连接
        await mongoose.connect('mongodb://localhost:27017/' + dbname)
    }


//创建Schema对象
    const Schema = mongoose.Schema
    sname = new Schema(rules)

//创建Model对象
    const result = mongoose.model(collname, sname)

    return result
}
