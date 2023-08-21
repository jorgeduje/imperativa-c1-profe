// ANCHOR ---> Objetos literales

let numeros = [ 12, 33, 55 ]

// let precioProducto = 33
// let nombreProducto = "celular"
// let categoriaProducto = "telefonio"

// PROPIEDADES ---> cosas que descreiben al objeto

// METODOS ----> cosas que pueden hacer

// PARES ---> clave : valor

let celular = {
    nombre: "samsung",
    stock: 5,
    precio: 33,
    direccion: {
        calle: "italia",
        numero: 122
    }
}

celular.direccion.calle = "españa"
console.log(celular.direccion.calle)

// MANIPULACION 

// MODIFICAR

celular.stock = 5

//AGREGAR

celular.categoria = "telefonia"

//BORRAR
// delete celular.precio

console.log(celular)


celular.direccion.calle = celular.direccion.calle.toUpperCase()

console.log(celular)


const promediarFn = function(){
    let acc = 0
        for( let i = 0; i < this.notas.length; i++  ){
            acc += this.notas[i]
        }

        return acc / this.notas.length
}


let estudiante = {
    nombre : "pepito",
    apellido : "perez",
    edad: 22,
    notas: [7, 7 , 10],
    promediar: promediarFn
}

let otroEstudiante = {
    nombre : "maria",
    apellido : "lopez",
    edad: 21,
    notas: [8, 8 , 10],
    promediar: promediarFn
}



let resultado = estudiante.promediar()
console.log(resultado)

let resultado2 = otroEstudiante.promediar()
console.log(resultado2)


// ARREGLOS DE OBJETOS

// productos ---> nombre, precio, stock ---> varios productos

let productos = [
    {
        nombre: "tele",
        precio: 22,
        stock: 12
    },
    {
        nombre: "compu",
        precio: 25,
        stock: 6
    },
    {
        nombre: "zapatilla",
        precio: 12,
        stock: 7
    },
    
]

// NO PUEDEN USAR --- FIND FILTER REDUCE FOREACH MAP SORT 


// const productos = fetch(htpp:mibackend.com/api/v1/productos)
// el backen va y le pide a la db la tabla productos y se la devuelve al front 

// pintas los productos en el html 

const cambiarPrecioSegunElNombre = ( nombre, nuevoPrecio )=>{

    for(let i =0; i < productos.length; i++){
        if(productos[i].nombre === nombre){
           productos[i].precio = nuevoPrecio
        }
        
    }

}

cambiarPrecioSegunElNombre("compu", 40 )
cambiarPrecioSegunElNombre("zapatilla", 12.5 )

console.log(productos)


// FUI AL MAYORISTA Y COMPRE UNA TABLET 
productos.push( {
    nombre:"tablet",
    precio:11,
    stock:6
})


console.log(productos)
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
    consultarCliente: function(){},
    deposito: function(){},
    extraccion: function(){}
}
// banco.consultarCliente("pepe")
// banco.deposito("maria")
// banco.extraccion("juancito")