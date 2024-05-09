let divs = document.getElementById('divsCreador')
let imagenes = document.getElementById('imagenes')

//guarda imagenes
let inputTitulo = document.getElementById('inputTitulo')

inputTitulo.addEventListener('change', (x) => {
let archivo = inputTitulo.files[0]

let leelo = new FileReader()

leelo.addEventListener('load', ()=> {
console.log(leelo.result)

})

leelo.readAsDataURL(archivo)

})



divs.addEventListener('click', ()=>{

    let cajas = document.createElement('div')
    cajas.innerText = 'hola'

    cajas.classList.add('divImg')
    imagenes.appendChild(cajas)


})