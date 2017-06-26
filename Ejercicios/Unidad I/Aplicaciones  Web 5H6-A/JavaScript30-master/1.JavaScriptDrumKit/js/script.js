function playsound(e){
//console.log(e.keyCode); arroja numero de la letra
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//console.log(audio);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return; //detiene la funcion para no correr el codigo restante
audio.currentTime = 0; //regresa audio al inicio para que se escuche cada q toques la tecla
audio.play();
//console.log(key);
key.classList.add('playing'); //añade playing a la clase

}
function removeTransition(e){
 // console.log(e);
if(e.propertyName !== 'transform') return; // lo salta si no es una transformacion
//console.log(e.propertyName);
this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playsound );