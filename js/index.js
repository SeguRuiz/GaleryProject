let logOut = document.getElementById('LogOut')

logOut.addEventListener('click', ()=>{

localStorage.removeItem('usuarios')
window.location.href = 'Login.html'


})