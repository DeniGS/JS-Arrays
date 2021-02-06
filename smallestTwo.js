function solve(numbers){
    let sorted = numbers.sort((a,b) => a - b)
    .slice(0, 2);

    console.log(sorted.join(' '));

}

solve([3, 0, 10, 4, 7, 3])