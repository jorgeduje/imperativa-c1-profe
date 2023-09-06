let gastos = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA
//

const calcularTotalPorSemana = (mat, numSemana) => {
  let fila = numSemana - 1;

  let contador = 0;
  for (let i = 0; i < mat[fila].length; i++) {
    contador += mat[fila][i];
  }
  return contador;
};

let totalSemanaTres = calcularTotalPorSemana(gastos, 3);
console.log(totalSemanaTres)

// CREANDO UNA FUNCION REUTILIZABLE...
// DEVOLVER EL MONTO DEL MAYOR DIA
//
let gastos2 = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 12500, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];
const calcularDiaMayorDeLaSemana = (mat, numSemana) => {
  let fila = numSemana - 1;

  let mayor = mat[fila][0];

  for (let i = 0; i < mat[fila].length; i++) {
    if (mayor < mat[fila][i]) {
      mayor = mat[fila][i];
    }
  }

  return mayor;
};

const mayorMontoSemanaTres = calcularDiaMayorDeLaSemana(gastos2, 3)
console.log(mayorMontoSemanaTres) 


// CALCULAR EL TOTAL GASTADO DEL MES

let gastos3 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 12500, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
  ];


  const calcularTotalMensual = (mat)=>{

    let acc = 0 
    for( let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            acc += mat[i][j]
        }
    }
    return acc
  }

  let totalFebrero = calcularTotalMensual(gastos3)
console.log(totalFebrero)




// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

let gastos4 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 12500, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
  ];


  // EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
// EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?

let gastos5 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 12500, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
  ];
