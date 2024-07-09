const venta = document.querySelector('#venta');
const alquiler = document.querySelector('#alquiler');

const propiedades_venta = [
    {
        nombre: 'Casa de lujo',
        src: '4.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 5,
        baños: 4,
        costo: 57000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: '5.jpeg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 2,
        costo: 43000000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: '6.jpeg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 5,
        baños: 3,
        costo: 590000000,
        smoke: false,
        pets: true
    }
]

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: '2.webp',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: ' 123 Main Street, Anytown, CA 91234',
        habitaciones: 1,
        baños: 1,
        costo: 990000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: '1.webp',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: ' 456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 4,
        baños: 3,
        costo: 150000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: '6.jpeg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 5000000,
        smoke: true,
        pets: false
    }
]
console.log(location.pathname)
let page = location.pathname
let ventaSection = '';
let alquilerSection = '';

function card(type, section, cantidad, part) {

    for (let i = 0; i <= cantidad; i++) {
        section += `
    <article class="card col-3">
        <img class="card-img-top" src='./assets/img${type[i].src}'>
        <div class="card-body">
            <h2 class="card-title">${type[i].nombre} </h2>
            <h4 class="card-subtitle mb-2 text-body-secondary">${type[i].descripcion}</h4>
            <h4 class="card-text">${type[i].ubicacion}</h4>
            <div class='rooms'>
            <div class='room'>
                <i class="fa-solid fa-house"></i>
                <p> ${type[i].habitaciones} Habitaciones </p>
            </div>
            <div class='room'>
                <i class="fa-solid fa-toilet"></i>
                <p> ${type[i].baños} baños</p>
            </div>

            </div>
            <h4>$${type[i].costo}</h4>
            <div  class="allow">${type[i].smoke === true ? `<i class="fa-solid green fa-smoking"></i><p class= 'green'>Permitido Fumar</p> ` : ` <i class="fa-solid red fa-ban-smoking"></i><p class='red'>No se permite fumar</p>`}</div>
            <div  class="allow">${type[i].pets === true ? `<i class="fa-solid green fa-paw"></i><p class= 'green'>Mascotas Permitidas</p> ` : ` <i class="fa-solid red fa-paw"></i><p class='red'>No se permiten mascotas</p>`}</div>
        </div>
    </article>
    `
    }
    part.innerHTML = section;
}

if (venta !== null) {
    let cantidad = 0
    if (page !== '#') {
        cantidad = propiedades_venta.length - 1
        card(propiedades_venta, ventaSection, cantidad, venta)
    } else {
        cantidad = 2
        card(propiedades_venta, ventaSection, cantidad, venta)
    };}

if (alquiler !== null) {
    let cantidad = 0
    if (page !== '#') {
        cantidad = propiedades_alquiler.length - 1
        card(propiedades_alquiler, alquilerSection, cantidad, alquiler)
    } else {
        cantidad = 2
        card(propiedades_alquiler, alquilerSection, cantidad, alquiler)
    };
}
