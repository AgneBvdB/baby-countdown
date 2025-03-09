const countDate = new Date("Aug 9, 2025 00:01:00").getTime();
let counter = document.getElementById("counter");
/* let btn = document.getElementById("user-btn"); */

const intervalCounter = setInterval(function() {
  let currentDate = new Date();
  let distance = countDate - currentDate;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 *60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  counter.innerText = `${days} DIENOS ${hours} VALANDOS ${minutes} MINUTĖS`;

/*   if(distance < 0){
    clearInterval(intervalCounter);
    counter.innerText = "Finished!";
  } */
}, 1000);