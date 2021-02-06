function solve(matrix){
    let isMagic = true;
    let sum = matrix[0].reduce((a, b) => a+b, 0);

    matrix.reduce((acc, row, i) => {
        let currentSum = row.reduce((a, b) => a+b, 0);
        if (currentSum !== sum){
            isMagic = false;
        }
    })

    console.log(isMagic);
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )   