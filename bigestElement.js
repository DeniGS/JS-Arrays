function solve (numbers){
    let flated = numbers.flat();
    let max = flated.reduce((a,b) => Math.max(a,b))

    console.log(max);
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   
   )