
function countOne(outerarr){
    let count = 0

    outerarr.forEach(element => {
        if(Array.isArray(element)){
            element.forEach((element) => {
                if(element === 1){
                    count += 1
                }
            })
        }
    });
    return count
}

console.log(countOne( [[0, 1, 1, 1, 0], [0, 1, 0, 1, 0, 1], [1, 0]]))