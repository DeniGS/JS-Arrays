function solve (arr){
    return arr.sort((a, b) => a.length - b.length || a.localeCompare(b))

}

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

));