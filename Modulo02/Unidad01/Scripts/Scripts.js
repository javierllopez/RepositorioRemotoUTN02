function CambiarFondo(color)
{
    document.body.style.backgroundColor = color;      
}
function ContarCaracteres()
{
    var longitud;
    longitud = document.getElementById('texto').value.length;
    if(longitud==1)
    {
        document.getElementById('caracteres').innerText = longitud + " caracter escrito";
    }
    else
    {
        document.getElementById('caracteres').innerText = longitud + " caracteres escritos";        
    }
}