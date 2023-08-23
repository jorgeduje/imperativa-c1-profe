// ANCHOR ---> Objetos literales

let numeros = [12, 33, 55];

// let precioProducto = 33
// let nombreProducto = "celular"
// let categoriaProducto = "telefonio"

// PROPIEDADES ---> cosas que descreiben al objeto

// METODOS ----> cosas que pueden hacer

// PARES ---> clave : valor

let celular = {
  nombre: "samsun",
  stock: 5,
  precio: 33,
  direccion: {
    calle: "italia",
    numero: 122,
  },
};

celular.direccion.calle = "españa";
console.log(celular.direccion.calle);

// MANIPULACION

// MODIFICAR

celular.stock = 5;

//AGREGAR

celular.categoria = "telefonia";

//BORRAR
// delete celular.precio

console.log(celular);

celular.direccion.calle = celular.direccion.calle.toUpperCase();

console.log(celular);

const promediarFn = function () {
  let acc = 0;
  for (let i = 0; i < this.notas.length; i++) {
    acc += this.notas[i];
  }

  return acc / this.notas.length;
};

let estudiante = {
  nombre: "pepito",
  apellido: "perez",
  edad: 22,
  notas: [7, 7, 10],
  promediar: promediarFn,
};

let otroEstudiante = {
  nombre: "maria",
  apellido: "lopez",
  edad: 21,
  notas: [8, 8, 10],
  promediar: promediarFn,
};

let resultado = estudiante.promediar();
console.log(resultado);

let resultado2 = otroEstudiante.promediar();
console.log(resultado2);

// ARREGLOS DE OBJETOS

// productos ---> nombre, precio, stock ---> varios productos

let productos = [
  {
    nombre: "tele",
    precio: 22,
    stock: 12,
  },
  {
    nombre: "compu",
    precio: 25,
    stock: 6,
  },
  {
    nombre: "zapatilla",
    precio: 12,
    stock: 7,
  },
];

// NO PUEDEN USAR --- FIND FILTER REDUCE FOREACH MAP SORT

// const productos = fetch(htpp:mibackend.com/api/v1/productos)
// el backen va y le pide a la db la tabla productos y se la devuelve al front

// pintas los productos en el html

const cambiarPrecioSegunElNombre = (nombre, nuevoPrecio) => {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre === nombre) {
      productos[i].precio = nuevoPrecio;
    }
  }
};

cambiarPrecioSegunElNombre("compu", 40);
cambiarPrecioSegunElNombre("zapatilla", 12.5);

console.log(productos);

// FUI AL MAYORISTA Y COMPRE UNA TABLET
productos.push({
  nombre: "tablet",
  precio: 11,
  stock: 6,
});

console.log(productos);
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

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (nombre) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === nombre) {
        return this.clientes[i];
      }
    }
  },
  deposito: function (nombre, cantidad) {
    let cliente = this.consultarCliente(nombre);
    if (cliente) {
      cliente.saldoEnPesos += cantidad;
      console.log(
        `deposito realizado con exito, su nuevo saldo es ${cliente.saldoEnPesos}`
      );
    } else {
      console.log("Cliente no encontrado");
    }
  },
  extraccion: function (nombre, cantidad) {
    let cliente = this.consultarCliente(nombre);
    if (cliente && cliente.saldoEnPesos >= cantidad) {
      cliente.saldoEnPesos -= cantidad;
      console.log(
        `deposito realizado con exito, su nuevo saldo es ${cliente.saldoEnPesos}`
      );
    } else {
      console.log("Cliente no encontrado o saldo insuficiente");
    }
  },
};
banco.extraccion("Ansel Ardley", 40000);
let cuentaAnsel = banco.consultarCliente("Ansel Ardley");
console.log(cuentaAnsel);
// banco.extraccion("juancito")

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

// TODO ---> Simulacion frontend E-commerce

/* 
  1)Las personas encargadas del backend nos enviaron una lista de productos pero 
      se olvidaron de asignarles un ID unico para cada producto,
      nuestra tarea es agregarles ese ID unico a cada uno
      Requisito: debe empezar en 1 y ser secuencial 
  2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
      si se venden todos los productos que tenemos en stock
  3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
      X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)
  4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
      especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
      multiplicar dicho precio 
  */

const generadorDeId = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].id = i + 1;
  }
};

generadorDeId(items);

const calcularTotal = (arreglo) => {
  let acc = 0;

  for (let i = 0; i < arreglo.length; i++) {
    acc += arreglo[i].precio * arreglo[i].cantidad;
  }

  return acc;
};

let totalVendido = calcularTotal(items);
console.log(totalVendido);

const filtrarPorCategoria = (arreglo, categoria) => {
  let arregloFiltrado = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].categoria === categoria) {
      arregloFiltrado.push(arreglo[i]);
    }
  }

  return arregloFiltrado;
};



const aumentarPrecio = (arreglo, categoria, porcentaje) => {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].categoria === categoria) {
      arreglo[i].precio *= porcentaje;
    }
  }
};

aumentarPrecio(items, "computacion", 1.5)


let itemsDeComputacion = filtrarPorCategoria(items, "computacion");
console.log(itemsDeComputacion);