const countDate = document.querySelector("#date")
let counter = document.getElementById("counter");
let btn = document.getElementById("date-btn"); 


let intervalCounter;
btn.addEventListener("click", () => {
  clearInterval(intervalCounter);

  const countDateValue = new Date(countDate.value);

  intervalCounter = setInterval(function() {
    const currentDate = new Date();
    const distance = countDateValue - currentDate;

    if(distance <= 0){
      clearInterval(intervalCounter);
      counter.innerText = "Finished!";
      return;
    } 

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 *60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    counter.innerText = `${days} Days ${hours} Hours`;
  }, 1000);
});