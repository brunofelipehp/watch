let hour = document.querySelector('.hours')
let minute = document.querySelector('.minutes')
let second = document.querySelector('.seconds')
let backgroundDay = document.getElementById('backgroundDay')

// atualiza a hora a cada segundo
setInterval(function (){
  let date = new Date()
  let hours = formatHours(date.getHours())
  let minutes = formatHours(date.getMinutes())
  let secondes = formatHours(date.getSeconds()) 
  
  hour.innerHTML = `${hours}`
  minute.innerHTML = `${minutes}`
  second.innerHTML = `${secondes.toLocaleString()}`

 let timeDay = Number(hour.innerHTML)
 checkHours(timeDay)
}, 1000);

// verifica o horário do dia e troca a cor de fundo
function checkHours(hours) {
  
  if (hours >= 5 && hours <= 12 ) {

    backgroundDay.style.background = 
    `linear-gradient(to bottom right, #219CBB, #219CBB, #35B45F)`
  
  }else if (hours >= 13 && hours <= 18) {
  
    backgroundDay.style.background = 
    `linear-gradient(to bottom right, #FF9100, #D31B1B, #E4E00F)`
  
  }else if (hours >= 19 && hours <= 23) {
  
    backgroundDay.style.background = 
   `linear-gradient(to bottom right, #0D0763, rgb(135, 101, 180), #252527)` 
  
  }else{
    
    backgroundDay.style.background =
    `linear-gradient(to bottom right, #0D0763, rgb(135, 101, 180), #252527)` 
  
  }
}

//formata a hora
function formatHours(time) {
  if (time < 10) {
      time = '0' + time;
  } return time;
}

