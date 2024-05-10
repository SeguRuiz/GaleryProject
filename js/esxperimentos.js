let divs = document.getElementById("divsCreador");

let imagenes = document.getElementById("imagenes");
let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let imgs = JSON.parse(localStorage.getItem(usuarios.nombre)) || []


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

