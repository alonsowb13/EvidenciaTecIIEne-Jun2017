const cuadros = document.querySelectorAll(".container div");
const retornos = document.querySelectorAll(".retorno");


cuadros.forEach(cuadro=>cuadro.addEventListener('click',Seleccion));
retornos.forEach(retorno=>retorno.addEventListener('click',Retornar))


function Seleccion(e){

        console.log("click seleccion")
        this.classList.add('maximize');

        Array.from(this.children).forEach(child=>{
            child.classList.add('show');
        })
}
function Retornar(e){
    e.cancelBubble=true;
    console.log("click retornar");
    cuadros.forEach(cuadro=>{cuadro.classList.remove('maximize')});
}