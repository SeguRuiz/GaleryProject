let formLog = document.getElementById('formLog')

formLog.addEventListener('submit', (quedate) => {
quedate.preventDefault()
let correo = document.getElementById('inputsLemail').value
let password = document.getElementById('inputsLpassword').value


let listaL = {
correo: correo.value,
password: password.value
}
let usuarios = JSON.parse(localStorage.getItem('usuarios'))
let cuentas = JSON.parse(localStorage.getItem('cuentas'))
let buscador = cuentas.find(busca => busca.email == correo && busca.password == password)
if (buscador) {
   localStorage.setItem('usuarios', JSON.stringify(buscador))
} else {
    console.log('La cuenta es incorrecta')
}

})
