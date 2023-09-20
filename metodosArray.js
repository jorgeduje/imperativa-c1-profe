// INTRO A PROGRAMACION FUNCIONAL

// CALLBACK ---> funcion que se pasa como argumento a otra funcion

// const sumar = (a, b)=>{

// }

// sumar( ()=>{} )

let arr = [1, 5, 4, 2]; // [2, 10, 8, 4]

const crearNuevo = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }

  return newArr;
};

//  funcional

// map ---> genera un nuevo arreglo a partir de otro, pero modificado
// siempre el nuevo arreglo va ser de la misma longitud
let arr2 = [1, 5, 4, 2];

let arrayMapeado = arr2.map((elemento) => {
  return elemento * 2;
});
console.log(arrayMapeado);

let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

let cuentasModificadas = arrayCuentas.map((elemento, indice) => {
  console.log(indice);
  return {
    saldoEnPesos: elemento.saldoEnPesos,
    titularCuenta: elemento.titularCuenta,
  };
});

console.log(cuentasModificadas);

// const crearNuevo2 = (arr) => {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArr.push({
//       titularCuenta: arr[i].titularCuenta,
//       saldoEnPesos: arr[i].saldoEnPesos,
//     });
//   }

//   return newArr;
// };

let arrayCuentas2 = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

// FILTER ---> devuelve un nuevo arreglo con todos los elementos que cumplan la condicion

const arrFiltrado = arrayCuentas2
  .filter((elemento) => elemento.saldoEnPesos > 20000)
  .map((elemento) => {
    return {
      saldoEnPesos: elemento.saldoEnPesos,
      titularCuenta: elemento.titularCuenta,
    };
  });

console.log(arrFiltrado);

// FIND ---> devuelve el primer elemento que cumpla la condicion || undefined

let nombre = "Jarret Lafuente";

let cuentaEncontrada = arrayCuentas2.find(
  (elemento) => elemento.titularCuenta === nombre
);
console.log(cuentaEncontrada);

let cuentas = [];

// forEach
arrayCuentas2.forEach((elemento) => {
  cuentas.push(elemento);
  console.log(`soy ${elemento.titularCuenta}`);
});

// sort

let numeros = [4, 2, 3, 1, 5];

// numeros.sort( (a, b)=> b - a )

console.log(numeros);

let arrayCuentas3 = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: -12,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

arrayCuentas3.sort((a, b) => {
  if (a.saldoEnPesos < b.saldoEnPesos) {
    return 1;
  } else if (a.saldoEnPesos > b.saldoEnPesos) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arrayCuentas3);

// reduce
let numeritos = [1, 5, 4];

const total = numeritos.reduce((acc, elemento) => {
  // acc = 1
  return acc + elemento;
});

console.log(total);

let items = [
  {
    nombre: "motorola",
    precio: 40,
    cantidad: 5,
    categoria: "telefonia",
  },
  {
    nombre: "notebook",
    precio: 80,
    cantidad: 10,
    categoria: "computacion",
  },
  {
    nombre: "zapatilla",
    precio: 20,
    cantidad: 2,
    categoria: "indumentaria",
  },
  {
    nombre: "Macbook",
    precio: 100,
    cantidad: 7,
    categoria: "computacion",
  },
  {
    nombre: "samsung",
    precio: 35,
    cantidad: 15,
    categoria: "telefonia",
  },
  {
    nombre: "monitor",
    precio: 30,
    cantidad: 5,
    categoria: "computacion",
  },
];

let total2 = items.reduce((acc, elemento) => {
  return acc + elemento.precio * elemento.cantidad;
}, 0);

console.log(total2);

// some ----> devuelve un booleano 

let seCumple = arrayCuentas3.some( (elemento)=> elemento.titularCuenta === "pepito" )

console.log(seCumple)

let seCumple2 = arrayCuentas3.every( (elemento)=> elemento.saldoEnPesos > 0 )
console.log(seCumple2)