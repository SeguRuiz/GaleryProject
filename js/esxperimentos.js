let divs = document.getElementById('divsCreador')
let imagenes = document.getElementById('imagenes')
let usuarios = JSON.parse(localStorage.getItem('usuarios'))
//crea elemento automatico
let imagen = document.createElement('img')
imagen.src = localStorage.getItem(usuarios.nombre)
let cajas = document.createElement('div')
cajas.classList.add('divImg')
imagenes.appendChild(cajas)
cajas.appendChild(imagen)

//guarda imagenes
let inputTitulo = document.getElementById('inputTitulo')

inputTitulo.addEventListener('change', (x) => {
let archivo = inputTitulo.files[0]

let leelo = new FileReader()

leelo.addEventListener('load', ()=> {
localStorage.setItem(usuarios.nombre, leelo.result)

})

leelo.readAsDataURL(archivo)

})


//agarra archivos del local storage
divs.addEventListener('click', ()=>{
    

})