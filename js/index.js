//declaracion de constantes
const mainBody = document.querySelector('#main');
const boton = document.createElement('button');
const divDatos = document.createElement('div');
const textDatos = document.createElement('h4');

//estilos del boton de ejemplo
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


//accion del boton de ejemplo
boton.onclick = () => {
    boton.style.borderColor = '#6B3B0B'
};



//seccion donde aparecen los datos del formulario
mainBody.appendChild(divDatos);


//declaracion del formulario
let miFormulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputCiudad = document.getElementById("ciudad");
const inputConsumo = document.getElementById("consumo");


//accion del formulario
miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    divDatos.appendChild(textDatos);
    textDatos.innerHTML = `${inputNombre.value} tiene el correo ${inputCorreo.value}, vive en la ciudad ${inputCiudad.value} y consume mensualmente ${inputConsumo.value}kWh`;
});
