document.onscroll = function() {

    if(document.documentElement.scrollTop > 100)
    {
    
        document.querySelector(".Boton").classList.add("BotonActivado");
    }
    else{
        document.querySelector(".Boton").classList.remove("BotonActivado");
    }
}