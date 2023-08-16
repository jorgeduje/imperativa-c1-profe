// ANCHOR ---> Array - Arreglo - Coleccion 

// let numeroDeLaSuerteUno = 15
// let numeroDeLaSuerteDos = 125
// let numeroDeLaSuerteTres = 43

// console.log( numeroDeLaSuerteTres )

let numerosDeLaSuerte = [15, 125, 43]
//  numerosDeLaSuerte[3] = 47
numerosDeLaSuerte.push( "hola", "chau" )
 console.log(numerosDeLaSuerte)

let palabrasFavoritas = ["mama", "papa", "casa", "avion","avion","avion"]

// console.log(palabrasFavoritas[0])
// console.log(palabrasFavoritas[1])
// console.log(palabrasFavoritas[2])
// console.log(palabrasFavoritas[3])




let palabrasFavoritas2 = ["mama", "papa", "casa", "abeja", "abeja", "abeja"] 

// palabrasFavoritas[0] ---> Accedo al primer elemento
// palabrasFavoritas[ palabrasFavoritas.length - 1 ] ---> Accedo al ultimo elemento


let frase = "el dia esta muy lindo" //---> colecciones de caracteres

console.log(frase.length)

let array = [ "hola", "pepe", "casa", "maria", "casa"]
// metodo indexOf

console.log( array.indexOf("casa") )
console.log( array.lastIndexOf("casa") )

console.log( frase.indexOf("y"))



// metodo includes

console.log(array.includes("pepe")) // ---> true o false

console.log( array.pop() )

console.log(array)



let numeros = [ 4, 12, 25 ]
let arrayInvertido = [] // 25 12 4

arrayInvertido.push( numeros.pop() )
arrayInvertido.push( numeros.pop() )
arrayInvertido.push( numeros.pop() )

console.log(arrayInvertido)



let palabra = "auto"
palabra = palabra.toLowerCase()
console.log(palabra)

console.log("-------------")
const mostrarElementos = ( arr )=>{

    for(let i = 0; i < arr.length ; i++ ){
        console.log(arr[i])
    }


}
mostrarElementos(numerosDeLaSuerte)