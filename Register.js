let registerForm = document.getElementById("formRegister");

registerForm.addEventListener("submit", (permanece) => {
permanece.preventDefault()
//mis valores de registro
 
let user = document.getElementById('inputsRuser').value
let email = document.getElementById('inputsRemail').value
let password = document.getElementById('inputsRpass').value
//lista de ususarios nombradadas
let lista = {
  nombre: user, email: email, password: password
}     
// local en blanco
let cuentas = JSON.parse(localStorage.getItem('cuentas')) || []
cuentas.push(lista)
localStorage.setItem('cuentas', JSON.stringify(cuentas))
// busca de mi objeto lista a lista.passaword busclo en cuentas

});


