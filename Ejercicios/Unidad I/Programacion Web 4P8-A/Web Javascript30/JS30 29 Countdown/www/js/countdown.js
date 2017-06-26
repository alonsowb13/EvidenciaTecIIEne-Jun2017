let countdown;

const timerSpan = document.querySelector('.time_left');
const countDisplay = document.querySelector('nav li:nth-child(7)');

function timer(seconds){
    clearInterval(countdown);
    
    const now = Date.now();
    const then = now + seconds * 1000;
    
    displayTimeLeft(seconds);
    
    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        if(secondsLeft<0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    },1000);
    
}

function displayTimeLeft(seconds){
    const days = Math.floor(seconds/86400);
    seconds = seconds - days*86400;
    const hours = Math.floor(seconds/3600);
    seconds = seconds - hours*3600;
    const minutes = Math.floor(seconds/60);
    const remainderSeconds = seconds %60;
    const dayUp = `${days} ${days==1?'Dia':'Dias'}`;
    const hourUp = `${hours<10?'0':''}${hours}`;
    const minutesUp = `${minutes<10?'0':''}${minutes}`;
    
    
    console.log(hourUp);
    const display = `<div>${dayUp}:</div>${hourUp}:${minutesUp}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    
    timerSpan.innerHTML = display;
}
timer(90500);

function fullWidth(){
    this.classList.toggle('active-count');
}

countDisplay.addEventListener('click',fullWidth);


