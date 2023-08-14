// ANCHOR ---> Estructuras de repeticion

// for

// INICIALIZACION ; CONDICION ; MODIFICADOR

// let x = 20
//     x = x + 1
//     x += 1
//     x++

const mostratHastaElDiez = () => {
  for (let i = 11; i <= 10; i++) {
    console.log(i);
    // console.log("hola")
  }

  console.log("termine");
};

mostratHastaElDiez();

// while

const mostratHastaElDiezWhile = () => {
  let i = 11;
  while (i <= 10) {
    console.log(i);

    i++;
  }

  console.log("termine");
};

mostratHastaElDiezWhile();

// do while
const mostratHastaElDiezDoWhile = () => {
  let i = 10;

  do {
    console.log(i);

    i++;
  } while (i <= 10);

  console.log("termine");
};

mostratHastaElDiezDoWhile();




// MOSTRAR LOS NUMEROS DE x HASTA y ---> recibir por parametros

const mostrarHastaX = ( inicio , num )=>{

    for(let i = inicio ; i <= num; i++  ){
        console.log(i)
    }

}

mostrarHastaX(14, 22)
console.log("------")
console.log("------")
// MOSTRAR LA TABLA DE MULTIPLICAR DE X NUMERO

const tabla = (numero) => {

    for( let i = 1 ; i <= 10 ; i++  ){
        // console.log(`${numero} * ${i} = ${ numero * i } `)
        console.log( numero + " * "+ i + " = " + (numero * i))
    }

}
tabla(3)

//  3
// 
//  3 * 1 = 3
//  3 * 2 = 6
//  3 * 3 = 9
//  3 * 4 = 12
//  3 * 10 = 30

// 1 + 2 + 3+ 4 +5 ---> 15 

const sumatoria = ()=>{

    let acumulador = 0

    for( let i = 1 ; i <= 5; i++ ){
        acumulador += i
    }

    return acumulador
}

let resultado = sumatoria()
console.log(resultado)

const cantidadImpares = ()=>{

    let cantidad = 0

    for( let i = 0 ; i <= 10 ; i++ ){
       
        if(i % 2 !== 0){
            cantidad++
        }
       

    }
    return cantidad
}

let resultado2 = cantidadImpares()
console.log(resultado2)

// // PARA SABER SI ES PAR ---> me da true cuando es par
// numero % 2 === 0

// // PARA SABER SI ES IMPAR ---> me da true cuando es IMPAR
// numero % 2 !== 0