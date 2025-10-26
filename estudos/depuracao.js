function radicando (x) {    
    return x ** (1/2)
}

function Pythagoras (cateto1, cateto2) {
    let sum  = cateto1**2 + cateto2**2
    return radicando (sum.toFixed(2))
}

console.log (   Pythagoras(3,4))