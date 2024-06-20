const mainBody = document.querySelector('#main');
const boton = document.createElement('button');
boton.textContent = 'Click';
boton.type = 'button';
mainBody.appendChild(boton);
boton.style.backgroundColor = '#D5C7B9';
boton.style.padding = '1rem';
boton.style.width = '5rem';
boton.style.margin = '2rem';
boton.style.color = '#6B3B0B';
boton.style.borderWidth = '0.15rem';
boton.style.borderRadius = '1rem';
boton.style.borderColor = '#D5C7B9';



// boton.addEventListener('click', respuestaAlClick);

// function respuestaAlClick() {
//     boton.style.borderColor = '#6B3B0B';
// }


// boton.addEventListener('click', () => {
//     boton.style.borderColor = '#6B3B0B'
// })


boton.onclick = () => {
    boton.style.borderColor = '#6B3B0B'
};








// const productos = [
//     {
//         id: 1,
//         nombre: 'Azucar',
//         precio: 1050.56
//     },
//     {
//         id: 2,
//         nombre: 'Yerba',
//         precio: 950.56
//     },
//     {
//         id: 3,
//         nombre: 'Tomate',
//         precio: 405.65
//     },
//     {
//         id: 4,
//         nombre: 'Levadura',
//         precio: 200
//     }
// ]



// const divProducto = document.createElement('div');
// contenido.appendChild(divProducto);

// for (const producto of productos){
//     let literal = `ID: ${producto.id} - Nombre: ${producto.nombre} - Precio: $${producto.precio}.-`
//     const textoH4 = document.createElement('h4');
//     textoH4.innerHTML = literal;
//     divProducto.appendChild(textoH4);
// }

// let parrafo = document.querySelector('#articulo__ p');
// let divParrafo = document.querySelector('#articulo__');
// let parrafoPorClase = document.querySelector('.parrafo__');
// console.log(parrafo);
// console.log(divParrafo);
// console.log(parrafoPorClase);



// const inputNombre = document.getElementById("nombre");
// const inputCorreo = document.getElementById("correo");
// const inputCiudad = document.getElementById("ciudad");
// const inputConsumo = document.getElementById("consumo");
// const btnGuardar = document.getElementById("guardar");

// inputNombre.value = 'Ingresa tu nombre';
// inputCorreo.value = 'Ingresa tu email';
// inputCiudad.value = 'Selecciona tu ciudad';
// inputConsumo.value = '0';


// btnGuardar.addEventListener("click", function() {
//     const nombre = inputNombre.value;
//     const correo = inputCorreo.value;
//     const ciudad = inputCiudad.value;
//     const consumo = inputConsumo.value;
// });

















//constructor para el objeto visitante
// class Visitante {
//     constructor(nombre, mail, ciudad, consumo, ahorro) {
//         this.nombre = nombre;
//         this.mail = mail;
//         this.ciudad = ciudad;
//         this.consumo = consumo;
//         this.ahorro = ahorro;
//     }
// }

// //se define un array para los objetos visitante
// const visitantes = [];



//funcion para pedir y guardar datos del visitante
// function pedirDatos() {
//     let nombre = prompt("Para hacer el cálculo rápido del ahorro con paneles solares, necesitamos algunos datos.\n¿Cuál es tu nombre?");
//     let telefono = prompt("¿Cuál es tu teléfono?");
//     let ciudad;
//     do{
//         ciudad = prompt("Elige una de estas tres ciudades e ingresa su nombre:\n - Guadalajara\n - Chihuahua\n - Campeche").toLowerCase();
//     }while(ciudad != "guadalajara" && ciudad != "chihuahua" && ciudad != "campeche");
//     consumo = parseFloat(prompt("Indica tu consumo mensual en kWh:"));
//     return {nombre, telefono, ciudad, consumo};
// }


//función para calcular el ahorro mensual del visitante
// function ahorroMensual(ciudad,OBJETIVO){
//     switch(ciudad){
//         case "guadalajara":
//             return 2.5 * OBJETIVO;
//             break;
//         case "chihuahua":
//             return 3.2 * OBJETIVO;
//             break;            
//         case "campeche":
//             return 1.8 * OBJETIVO;
//             break;
//         default:
//             return "Esa ciudad no se tiene";
//             break;                    
//     }
// }


// //funcion para crear un visitante y guardarlo como un nuevo objeto en el array de visitantes
// function crearVisitante() {
//     //const { nombre, telefono, ciudad, consumo } = pedirDatos();

//     const calculoObjetivo = consumo => consumo * 0.8;
//     const OBJETIVO = calculoObjetivo (consumo);
//     const ahorro = Math.round(ahorroMensual(ciudad,OBJETIVO));

//     console.log(`Se ingresaron los datos de nombre ${nombre}, correo ${mail}, ciudad ${ciudad} y ${consumo} kWh de consumo mensual`)
//     //alert(`Con la información que ingresaste calculamos que puedes\nahorrar mensualmente $${ahorro} MXN\nal poner paneles solares.`);
//     console.log(`El ahorro mensual calculado es de $${ahorro} MXN`);
    
//     const usuario = new Visitante(nombre, mail, ciudad, consumo, ahorro);
//     visitantes.push(usuario);
//     return usuario;
// }


// //llamado de la funcion de crearVisitante
// crearVisitante();














