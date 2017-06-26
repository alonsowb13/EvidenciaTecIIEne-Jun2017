<<<<<<< HEAD
function setDate(){
            
            const now = new Date();
            const seconds = now.getSeconds();
            const secondsDegrees = ((seconds/60)*360+90);
            const minutes = now.getMinutes();
            const minutesDegrees = ((minutes/60)*360 + ((seconds/60)*6)+90);
            
            var hour = now.getHours();
            if(hour>12)hour=hour-12;
            const hourDegrees = ((hour/12)*360 + ((minutes/60)*30)+90);
            console.log(hour,minutes,seconds);
            
            
            const sec_hand = document.querySelector('.second-hand');
            sec_hand.style.transform = `rotate(${secondsDegrees}deg)`;
            
            const min_hand = document.querySelector('.minute-hand');
            min_hand.style.transform = `rotate(${minutesDegrees}deg)`;
            
            const hour_hand = document.querySelector('.hour-hand');
            hour_hand.style.transform = `rotate(${hourDegrees}deg)`;
}
=======
function setDate(){
            
            const now = new Date();
            const seconds = now.getSeconds();
            const secondsDegrees = ((seconds/60)*360+90);
            const minutes = now.getMinutes();
            const minutesDegrees = ((minutes/60)*360 + ((seconds/60)*6)+90);
            
            var hour = now.getHours();
            if(hour>12)hour=hour-12;
            const hourDegrees = ((hour/12)*360 + ((minutes/60)*30)+90);
            console.log(hour,minutes,seconds);
            
            
            const sec_hand = document.querySelector('.second-hand');
            sec_hand.style.transform = `rotate(${secondsDegrees}deg)`;
            
            const min_hand = document.querySelector('.minute-hand');
            min_hand.style.transform = `rotate(${minutesDegrees}deg)`;
            
            const hour_hand = document.querySelector('.hour-hand');
            hour_hand.style.transform = `rotate(${hourDegrees}deg)`;
}
>>>>>>> e37c3d33ff3f6a6dff200d54fa43c169401c664a
setInterval(setDate,1000);