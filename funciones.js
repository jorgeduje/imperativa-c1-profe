
// ANCHOR ---> FUNCIONES

// FUNCION DECLARADA

// CREAR LA FUNCION
function saludar (nombre){
    // BLOQUE DE CODIGO
    // let saludo = "hola " + nombre + " como estas?"
    // TEMPLATE LITERALS ---> backsticks 
    
    let saludo = `hola ${nombre} como estas?`
    return saludo
}

// EJECUTAR LA FUNCION
let saludoFinal = saludar("pepe")
let saludoFinal2 = saludar("maria")
console.log(saludoFinal)
console.log(saludoFinal2)

function sumar (a, b){
    return a + b
}


let numero1 = 2
let numero2 = 5
let resultado = sumar(numero1, numero2)
console.log(resultado)

// let resultado2 = sumar(15, 13)
// console.log(resultado2)


// FUNCIONES EXPRESADAS

    // FUNCION EXPRESADA ---> comun
    // FUNCION EXPRESADA ---> flecha ( arrow function )
