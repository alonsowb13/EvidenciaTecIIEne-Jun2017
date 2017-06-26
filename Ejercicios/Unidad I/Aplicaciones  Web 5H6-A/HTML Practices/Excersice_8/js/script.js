



function mostrar(enla) {
  obj = document.getElementById('oculto');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';
  enla.innerHTML = (enla.innerHTML == '-') ? 'mostrar' : '-';
}




function click{
mostrar(this); return false;
}




