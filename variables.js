// ANCHOR ---> VARIABLES

// let - const

let nombre = "jorge";

const apellido = "Duje";

// console.log(nombre);

// console.log(apellido);

nombre = "pepito";

// console.log(nombre);

//  NO SE PUEDE
// apellido = "perez"

// console.log(apellido)

// ANCHOR ---> TIPO DE DATOS  primitivos

// string o cadena de texto

let frase = "hoy hace calor!";

// number -- numeros

let edad = 30

// Boolean --- true o false -- verdadero o falso

let esMayor = false

// undefined 
let nombreDeUsuario;

console.log(nombreDeUsuario)

// null

let peticionDeDatos = null

// NaN -- not a number

let a = "pepe"
let b = 15

let x = a * b
console.log(x)

// ANCHOR ---> Operadores

// ANCHOR ---> Matematicos

let y = 6
let z = 4

console.log(y + z)
console.log(y - z)
console.log(y * z)
console.log(y / z)
// OPERADOR DE MODULO --- ME DEVUELVE EL RESTO
console.log(y % z)


// ANCHOR ---> Comparacion
// SIEMPRE SIEMPRE DEVUELVE UN BOOLEANO

console.log( y == z ) //--> false --- SIMPLE
console.log( y != z ) // --> true --- SIMPLE
// console.log( y > z)
// console.log( y < z)
// console.log( y >= z)
// console.log( y <= z)

console.log("---------*")

let n1 = "12"
let n2 = 12

console.log(n1 === n2) //---> ESTRICTA
console.log( n1 !== n2 ) //---> ESTRICTA

console.log("-------------")
console.log("-------------")
console.log("-------------")
// ANCHOR ---> Logicos

// AND ---> &&
// ANCHOR ---> basta con que una condicion evalue como false para que todo sea false

let estaLogueado = false
let esAdmin = true 

let tienePermiso = estaLogueado === true && esAdmin === true

console.log(tienePermiso)

// OR --->  || 
// ANCHOR ---> basta con que una condicion evalue como true para que todo sea true
let tienePermiso2 = estaLogueado === true || esAdmin === true 
console.log(tienePermiso2)

// not ---> !
console.log("---")
let xx = true 
console.log( !xx ) 

