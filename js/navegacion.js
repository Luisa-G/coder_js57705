//declaracion de constantes header
const cuerpo = document.body;
const titulo = document.getElementById('titulo');
const cabecera = document.getElementById('header');
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["Inicio", "Productos", "Contacto"];
const liImagen = document.createElement('li');
const img = document.createElement('img');
const ORIGEN = document.createElement('a');


//asignacion de colores de fondo
cuerpo.style.backgroundColor = '#EFE0D2';
cabecera.style.backgroundColor = '#C2CDA5';
titulo.style.backgroundColor = '#D5C7B9';
cuerpo.style.color = '#6B3B0B';

titulo.style.margin = '1rem';
titulo.style.textAlign = 'center';


//creacion del espacio para el header
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

//agregar logo en el header
ORIGEN.href = '/';
ORIGEN.appendChild(img);
img.src = 'img/logo_lombriz.png';
img.alt = 'Lombricultura GDL'
liImagen.appendChild(ORIGEN);
ul.appendChild(liImagen);

//agregar elementos al header
for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`
    ul.appendChild(li);
}


