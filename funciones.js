// ANCHOR ---> FUNCIONES

// FUNCION DECLARADA ---> HOISTING

// CREAR LA FUNCION
function saludar(nombre) {
  // BLOQUE DE CODIGO
  // let saludo = "hola " + nombre + " como estas?"
  // TEMPLATE LITERALS ---> backsticks

  let saludo = `hola ${nombre} como estas?`;
  return saludo;
}

// EJECUTAR LA FUNCION
let saludoFinal = saludar("pepe");
let saludoFinal2 = saludar("maria");
console.log(saludoFinal);
console.log(saludoFinal2);

function sumar(a, b) {
  return a + b;
}

let numero1 = 2;
let numero2 = 5;
let resultado = sumar(numero1, numero2);
console.log(resultado);

let resultadoResta = restar();
console.log(resultadoResta);
// let resultado2 = sumar(15, 13)
// console.log(resultado2)

// console.log(edad )
// let edad = 2

restar();
function restar() {
  return 10 - 2;
}

// FUNCIONES EXPRESADAS ---> anonimas

// FUNCION EXPRESADA ---> comun

const multiplicar = function (n1, n2) {
  return n1 * n2;
};

const resMulti = multiplicar(1, 3);
const resMulti2 = multiplicar(2, 5);

console.log(resMulti);
console.log(resMulti2);

// FUNCION EXPRESADA ---> flecha ( arrow function )
// SI RECIBE UN UNICO PARAMETRO --- PUEDO QUITAR LOS PARENTESIS
// SI TIENE UNA UNICA LINEA DE CODIGO PUEDO OMITIR EL RETURN Y LAS LLAVES
const dividir = (n1) => {
  return n1 / 5;
};

let resultadoDivision = dividir(20);
console.log(resultadoDivision);

{
  /* <h2>el resultado de la division es : {resultadoDivision}</h2> */
}

// SCOPE ---> ambiente ---> local

const saltar = ()=>{
    
    let pepe = "hola como estas"
    
}

// console.log(pepe)








