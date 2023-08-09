// ANCHOR ---> ESTRUCTURAS DE CONTROL

// IF

const controlarAcceso = (rol) => {
  let accesoFinal = "";
  if (rol === "superAdmin") {
    accesoFinal = "tiene acceso a todo";
  } else if (rol === "admin") {
    accesoFinal = "tiene acceso a casi todo";
  } else {
    accesoFinal = "tiene acceso a una parte";
  }

  return accesoFinal;

  // if (rol === "superAdmin") {
  //   return "tiene acceso a todo";
  // } else if (rol === "admin") {
  //   return "tiene acceso a casi todo";
  // } else {
  //   return "tiene acceso a una parte";
  // }
};

let resultado = controlarAcceso("cualquier cosa");
console.log(resultado);

// TERNARIO
// UNICAMNETE SI ESTA LLOVIENDO , LLEVO PARAGUAS

const llevoParaguas = (clima) => {
  let condicionFinal = "";

  // if(clima === "lluvioso"){
  //     condicionFinal = "Si, llevalo!"
  // }else{
  //     condicionFinal = "No, no hace falta"
  // }

  // condicion ? verdadero : falso

  //  condicionFinal = clima === "lluvioso" ?  "Si, llevalo!" : "No, no hace falta"

  // return condicionFinal
  return clima === "lluvioso" ? "Si, llevalo!" : "No, no hace falta";
};

let resultado2 = llevoParaguas("soleado");
console.log(resultado2);

// SWITCH -- case

// vw(10) - toyota(30) - citroen - audi - bmw - volvo -renault

const calcularImpuesto = (marcaAuto) => {
  let total = 100;

  switch (marcaAuto) {
    case "vw":
      total = total + 10;

      break;
    case "toyota":
    case "audi":
    case "citroen":
      total = total + 20;
      break;
    default:
      total = 0;
  }

  return total > 0 ? total : "Su auto esta exento!";
};

let totalApagar = calcularImpuesto("citroen");
console.log(totalApagar);

// if(marcaAuto === "vw"){
//     total = total + 10
// }else if( marcaAuto === "toyota"){
//     total = total + 30
// }else if( marcaAuto === "citroen"){
//     total = total + 500
// }
