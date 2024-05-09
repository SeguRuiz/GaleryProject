let logOut = document.getElementById('LogOut')
let input = document.getElementById('distintivo')
let btn = document.getElementById('btn')
let bienvenida = document.getElementById('bienvenida')
let usuarios = JSON.parse(localStorage.getItem('usuarios'))
let texto = document.createElement('h1')

//Afinar esta logica para mañana
if (usuarios != null) {
    document.getElementById('logeate').innerHTML = ''
    bienvenida.innerHTML = 'Bienvenido ' + usuarios.nombre
    btn.addEventListener('click', ()=> {
    let usuarioSesion = {
nombre: usuarios.nombre,
texto: input.value

}

let sesion = JSON.parse(localStorage.getItem('usua')) || []
sesion.push(usuarioSesion)
localStorage.setItem('usua', JSON.stringify(sesion))

let comprobarN = sesion.find(encuentra => encuentra.nombre == usuarios.nombre)
if (comprobarN) {
    texto.innerText = comprobarN.texto
    document.getElementById('body').appendChild(texto)
}

})
    if (localStorage.getItem('sesionDE') == usuarios.nombre) {
        
    }
    
    
    

}else{
    bienvenida.innerHTML = 'No hay nadie aqui' 
}




logOut.addEventListener('click', ()=>{

localStorage.removeItem('usuarios')
window.location.reload()



})


