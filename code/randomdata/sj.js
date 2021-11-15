exports.randomData = function (n,u) {
    const str = 'qwertyuiopasdfghjklzxcvbnm'
    let result = []
    for (let j = 0; j< n; j++) {
        let s = ''
        for (let i = 0; i < u; i++) {
            let num = Math.floor((Math.random() * 26))
            s += str.charAt(num)
        }
        result.push(s)
    }
    return result
}



