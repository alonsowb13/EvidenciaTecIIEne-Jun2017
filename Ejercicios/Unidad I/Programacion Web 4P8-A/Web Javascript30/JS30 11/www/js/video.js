<<<<<<< HEAD
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider')

const fullScreen = player.querySelector('.fullscreen');

let isFullScreen = false;

function tooglePlay(){
    if(video.paused){
        video.play();
    }else {
        video.pause();
    }
    
}
console.dir(video);
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}
function skip(){
    video.currentTime+=parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}
function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
}
function full(e){
    if(!isFullScreen){
        if (player.requestFullscreen) {
          player.requestFullscreen();
        } else if (player.mozRequestFullScreen) {
          player.mozRequestFullScreen();
        } else if (player.webkitRequestFullscreen) {
          player.webkitRequestFullscreen();
        } 
        
    }else {
        if (document.requestFullscreen) {
          document.exitFullscreen();
        } else if (document.mozExitFullscreen) {
          document.mozExitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
        
    }
    isFullScreen = !isFullScreen;
    
   
}
video.addEventListener('click',tooglePlay);
video.addEventListener('dblclick',full);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

toggle.addEventListener('click',tooglePlay);
skipButtons.forEach(button=>button.addEventListener('click',skip));
ranges.forEach(range=> range.addEventListener('change',handleRangeUpdate))
ranges.forEach(range=> range.addEventListener('mousemove',handleRangeUpdate))

let mousedown = false;

progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e));
progress.addEventListener('mousedown',()=>mousedown=true);
progress.addEventListener('mouseup',()=>mousedown=false);

=======
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider')

const fullScreen = player.querySelector('.fullscreen');

let isFullScreen = false;

function tooglePlay(){
    if(video.paused){
        video.play();
    }else {
        video.pause();
    }
    
}
console.dir(video);
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}
function skip(){
    video.currentTime+=parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}
function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
}
function full(e){
    if(!isFullScreen){
        if (player.requestFullscreen) {
          player.requestFullscreen();
        } else if (player.mozRequestFullScreen) {
          player.mozRequestFullScreen();
        } else if (player.webkitRequestFullscreen) {
          player.webkitRequestFullscreen();
        } 
        
    }else {
        if (document.requestFullscreen) {
          document.exitFullscreen();
        } else if (document.mozExitFullscreen) {
          document.mozExitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
        
    }
    isFullScreen = !isFullScreen;
    
   
}
video.addEventListener('click',tooglePlay);
video.addEventListener('dblclick',full);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

toggle.addEventListener('click',tooglePlay);
skipButtons.forEach(button=>button.addEventListener('click',skip));
ranges.forEach(range=> range.addEventListener('change',handleRangeUpdate))
ranges.forEach(range=> range.addEventListener('mousemove',handleRangeUpdate))

let mousedown = false;

progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e));
progress.addEventListener('mousedown',()=>mousedown=true);
progress.addEventListener('mouseup',()=>mousedown=false);

>>>>>>> e37c3d33ff3f6a6dff200d54fa43c169401c664a
fullScreen.addEventListener('click',full);