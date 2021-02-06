function solve(input){
    let n = input.pop();
    
    for (let i = 1; i <= n; i++) {
        input.unshift(input.pop())
        
    }
    console.log(input);
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']

)