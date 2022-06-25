const contactoForm = document.getElementById('contacto-form');
const inputNombre = document.getElementById('inputNombre');
const inputApellido = document.getElementById('inputApellido');
const inputTelefono = document.getElementById('inputTelefono');
const bodyTabla = document.getElementById('body-tabla');
let contactos = [];

function agregarContacto(nombre, apellido, telefono) {
    contactos.push({
        nombre,
        apellido: apellido,
        telefono: telefono,
    })
}

function eliminarContacto(indice) {
    contactos.splice(indice, 1);
    mostrarContactos();
}

function mostrarContactos() {
    bodyTabla.innerHTML = '';
    contactos.forEach(function(contacto, indice) {
        bodyTabla.innerHTML += `<tr>
        <th scope="row" class="text-center">${indice + 1}</th>
        <td class="text-center">${contacto.nombre}</td>
        <td class="text-center">${contacto.apellido}</td>
        <td class="text-center">${contacto.telefono}</td>
        <td class="text-center">
        <button class="btn btn-warning m-1 bg-gradient fw-bold" onclick="editarContacto(${indice})">Editar</button>
        <button class="btn btn-danger m-1 bg-gradient fw-bold" onclick="eliminarContacto(${indice})">Eliminar</button>        
        </td>
        </tr>`
    })
    guardarContactosStorage();
}

function editarContacto(indice) {
    contactos[indice].nombre = prompt('Ingresa un nuevo nombre.', 'Nuevo nombre');
    contactos[indice].apellido = prompt('Ingresa un nuevo apellido.', 'Nuevo apellido');
    contactos[indice].telefono = prompt('Ingresa un nuevo teléfono.', 'Nuevo teléfono');

    mostrarContactos();
}

function editarContactoPrompt(indice, nombre, apellido, telefono) {
    contactos[indice].nombre = nombre;
    contactos[indice].apellido = apellido;
    contactos[indice].telefono = telefono;

    mostrarContactos();
}

contactoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (inputNombre.value.trim() !== '' && inputApellido.value.trim() !== '' && inputTelefono.value.trim() !== '') {

        bodyTabla.innerHTML = '';

        agregarContacto(inputNombre.value, inputApellido.value, inputTelefono.value);

        mostrarContactos();

        event.target.reset();
    } else {
        alert('Introdusca infromación valida en los 3 campos');
    }
});

function SoloNumeros(event) {
    if (window.event) {
        keynum = event.keyCode;
    } else {
        keynum = event.which;
    }
    if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13) {
        return true;
    } else {
        alert("Ingrese solo numeros en la casilla de Teléfono")
        return false;
    }
}

function guardarContactosStorage() {
    const contactosGuardar = JSON.stringify(contactos);
    localStorage.setItem('contactos', contactosGuardar);
}

function obtenerContactosStorage() {
    const contactosStorage = localStorage.getItem('contactos');
    if (contactosStorage == null) {
        contactos = [];
    } else {
        contactos = JSON.parse(contactosStorage);
    }
}

obtenerContactosStorage()
mostrarContactos();