<<<<<<< HEAD
(function(){


function removeTransition(e){
            if (e.propertyName !== 'transform') return;
            e.target.classList.remove('playing');
}
    
window.addEventListener('keydown',function(e){
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
            if(!audio) return;
            
            key.classList.add('playing');
            audio.currentTime=0;
            audio.play();
});

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

=======
(function(){


function removeTransition(e){
            if (e.propertyName !== 'transform') return;
            e.target.classList.remove('playing');
}
    
window.addEventListener('keydown',function(e){
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
            if(!audio) return;
            
            key.classList.add('playing');
            audio.currentTime=0;
            audio.play();
});

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

>>>>>>> e37c3d33ff3f6a6dff200d54fa43c169401c664a
})();