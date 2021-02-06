function solve(numbers){
    let even = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0){
            even.push(numbers[i])
        }
        
    }
    console.log(even.join(' '));
}

solve(['5', '10'])