function solve(arr) {
    let num = arr.shift();
    let newArr = [];
    newArr.push(num);
    while (arr.length > 0) {
        let curr = arr.shift();
        if (num < curr) {
            newArr.push(curr)
            num = curr;
        }
    }

    console.log(newArr);
}

solve([20,
    3,
    2,
    15,
    6,
    1]
)