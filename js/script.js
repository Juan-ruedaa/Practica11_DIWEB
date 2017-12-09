window.addEventListener("load",function(){
    let botonAnnadir = document.getElementById("botonAnnadir");
    let divEditar = document.getElementById("editar");
    let background_shadow = document.getElementById("background_shadow");
    let botonCancelar = document.getElementById("botonCancelar");

    let nuevaTarea = function(){
        divEditar.style.left = "0%";
        background_shadow.style.opacity = "0.5";
        background_shadow.style.visibility = "visible";
    }

    let cerrarNuevaTarea = function(){
        divEditar.style.left = "-100%";
        background_shadow.style.opacity = "0";
        background_shadow.style.visibility = "hidden";
    }


    botonAnnadir.addEventListener("click", nuevaTarea);
    botonCancelar.addEventListener("click", cerrarNuevaTarea);
});