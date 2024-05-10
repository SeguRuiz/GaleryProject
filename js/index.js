let log = document.getElementById('logeate')

log.addEventListener('click', ()=>{
  window.location.href = 'http://127.0.0.1:5500/Login.html'
})


//botones log out y registrate
let logOut = document.getElementById("logOut");

let registrate = document.getElementById('registrarse')


//contenedor de las imagenes
let imagenes = document.getElementById("imagenes");
// llama mi puerta a mi sesion
let usuarios = JSON.parse(localStorage.getItem("usuarios"));
// establece una puerta de datos leibles por mi de nombre == al que esta sesion
let imgs = JSON.parse(localStorage.getItem(usuarios.nombre)) || []
//Bienvenida


if ( usuarios != null) {
  
  log.innerHTML = ''
  
}

document.getElementById('bienvenida').innerHTML = 'Bienvenid@ ' + usuarios.nombre + ' ¿que imagen subiras hoy?'








//log out funcion
logOut.addEventListener('click', ()=>{

window.location.reload()
localStorage.removeItem('usuarios')

window.location.href = 'http://127.0.0.1:5500/Login.html'

})


//borra el login si usuarios != null



//revisa datos de imagen
for (let m = 0; m < imgs.length; m++) {
  const revisaImgs = imgs[m].imgs;




  let div = document.createElement('div')
  let img = document.createElement('img')
  img.src = revisaImgs
  img.classList.add('img')
  div.classList.add('divImg')

  imagenes.appendChild(div)
  div.appendChild(img)

  
}
//crea elemento automatico

//guarda imagenes
let inputTitulo = document.getElementById("inputTitulo");

inputTitulo.addEventListener("change", (x) => {

  
  let archivo = inputTitulo.files[0];

  let leelo = new FileReader();

  leelo.addEventListener("load", () => {
    let img = {
      usuario: usuarios.nombre,
      imgs: leelo.result,
    };
    

    
    imgs.push(img);
    localStorage.setItem(usuarios.nombre, JSON.stringify(imgs));
    window.location.reload()
  });

  leelo.readAsDataURL(archivo);
});

//agarra archivos del local storage




//Afinar esta logica para mañana
/*if (usuarios != null) {
  document.getElementById("logeate").innerHTML = "";
  bienvenida.innerHTML = "Bienvenido " + usuarios.nombre;
  btn.addEventListener("click", () => {
    let usuarioSesion = {
      nombre: usuarios.nombre,
      texto: input.value,
    };

    let sesion = JSON.parse(localStorage.getItem("usua")) || [];
    sesion.push(usuarioSesion);
    localStorage.setItem("usua", JSON.stringify(sesion));

    let comprobarN = sesion.find(
      (encuentra) => encuentra.nombre == usuarios.nombre
    );
    if (comprobarN) {
      texto.innerText = comprobarN.texto;
      document.getElementById("body").appendChild(texto);
    }
  });
  if (localStorage.getItem("sesionDE") == usuarios.nombre) {
  }
} else {
  bienvenida.innerHTML = "No hay nadie aqui";
}

logOut.addEventListener("click", () => {
  localStorage.removeItem("usuarios");
  window.location.reload();
});*/
