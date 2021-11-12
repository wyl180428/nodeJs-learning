//模板字符串
const uname = 'wyl'
const age = 18
console.log(`${uname}已经${age}岁`)

// Promise
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const u = 'wyl'
        resolve(u)
    }, 1000)
});

p.then((u)=>{
    console.log(u)
})

//async
async function test(){   //async定义的是异步操作
    return 'hello nodejs'
}

// test().then((a)=>{
//     console.log(a)
// })

//await
async function main(){
    let data = await test()
    console.log(data)
}

main()
