//parImpar
let numerosPares = function (number) {
    if (number==0) 
    { return "es error"}
    return number % 2 == 0 ? "es par" : "no es par" ;
}
console.log(numerosPares(3));