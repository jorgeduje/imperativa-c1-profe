// ANCHOR ---> Matrices

let mat = [
  [2, 5, 3], // fila 0
  [1, 5, 6], // fila 1
  [3, 5, 2], // fila 2
];

// mat[fila][columna]

// mat[1][2] = 2

// console.log(mat[0][2])

// mat[0].push(15)

// console.log(mat[0])

let matrix = [
  [2, 5, 3], // fila 0
  [1, 5, 7], // fila 1
  [3, 5, 2], // fila 2
];

// matrix[0][0]
// matrix[0][1]
// matrix[0][2]

// FILA ---> le pido la longitud a la fila

const recorrerFila = (mat, numFila) => {
  let acc = 0;
  for (let i = 0; i < mat[numFila].length; i++) {
    acc += mat[numFila][i];
  }
  return acc;
};

let res = recorrerFila(matrix, 1);
console.log(res);

// COLUMNA

let matrix2 = [
  [2, 5, 3], // fila 0
  [1], // fila 1
  [3], // fila 2
];

// matrix2[0][2]
// matrix2[1][2]
// matrix2[2][2]

const recorrerCol = (mat, numCol) => {
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    if(mat[i][numCol] !== undefined){
        acc += mat[i][numCol];
    }
  }
  return acc;
};

let res2 = recorrerCol(matrix2, 1);
console.log(res2)

// MATRIZ COMPLETA ---> doble ciclo for

// PRINCIPAL

// SECUNDARIA
