const secondHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hoursHand = document.querySelector('.hour-hand');

  function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees =((seconds / 60) * 360 + 90);
    secondHand.style.background = `yellow`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //console.log(seconds);
    
    const min = now.getMinutes();
    const minDegrees =((min / 60) * 360 + 90);
    minHand.style.transform = `rotate(${minDegrees}deg)`;

  
    //console.log(mins);

    const hours = now.getHours();
    const hoursDegrees =((hours / 24) * 360 + 90);
    hoursHand.style.width = `35%`;
    hoursHand.style.left = `15%`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;



  }



  setInterval(setDate,1000);
  setDate();