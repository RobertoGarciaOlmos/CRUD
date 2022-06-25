//const input = document.getElementById("input")

// function imprimirValorInput() {
// console.log(input.value);
// }

// const boton = document.getElementsByClassName("boton");

// const lable = document.querySelector("label");

// Crear un elemento (metodo1)



// var Imagen = document.createElement("img");

// let perro = document.querySelector("body");
// perro.appendChild(Imagen);



// Imagen.src = "https://tse3.mm.bing.net/th?id=OIP.6VxupNs7ee2hyKlMiGyAcQHaGL&pid=Api&P=0&w=199&h=166"


// var Imagen2 = document.createElement("img");


// let perro2 = document.querySelector("header");
// perro.appendChild(Imagen2);



// Imagen2.src = "https://tse3.mm.bing.net/th?id=OIP.6VxupNs7ee2hyKlMiGyAcQHaGL&pid=Api&P=0&w=199&h=166"

// var imgperro = "https://tse3.mm.bing.net/th?id=OIP.6VxupNs7ee2hyKlMiGyAcQHaGL&pid=Api&P=0&w=199&h=166"



// let miboton = document.getElementById("boton1");

// function miFuncion(evento) {
// console.log("hiciste click!")
// perro2.innerHTML += "ya casi"


// }

// miboton.addEventListener("click", miFuncion)


const formulario = document.getElementById("form")
const names = document.getElementById("inputN")
const lastname = document.getElementById("inputLN")
const email = document.getElementById("inputE")
const phone = document.getElementById("inputP")
const tabla = document.getElementById("bodytabla")


//3:02






formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    if (names.value !== '' || lastname.value !== '' || email.value !== '' || phone.value !== '') {
        tabla.innerHTML += `<tr>   
    <th scope = "row" > 1 </th>     
    <td> ${names.value} </td>    
    <td> ${ lastname.value.trim() } </td>  
    <td> ${ email.value.trim() } </td>    
    <td> ${ phone.value.trim() } </td>
    </tr>`

        evento.target.reset();
    } else { alert("los tres campos son obligatorios") }
});