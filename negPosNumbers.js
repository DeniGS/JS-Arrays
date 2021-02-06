function solve(numbers){
    let sorted = numbers.sort((a, b) => a - b);

    for (const num of sorted) {
        console.log(num);
        
    }

}

solve([3, -2, 0, -1])