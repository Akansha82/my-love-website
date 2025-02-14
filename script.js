document.addEventListener("DOMContentLoaded", function() {
    let clockElement = document.getElementById("digital-clock");
    let messageElement = document.getElementById("message");
    let imageElement = document.getElementById("birthday-image");
    let buttonElement = document.getElementById("enter-btn");
    let countdownElement = document.getElementById("countdown");
    
    let secondsLeft = 10;
    
    function updateClock() {
        // let minutes = Math.floor(secondsLeft / 60).toString().padStart(2, '0');
        let seconds = (secondsLeft % 60).toString().padStart(2, '0');
        clockElement.innerText = `11:59:${seconds}`;
        
        if (secondsLeft === 0) {
            clearInterval(countdown);
            clockElement.style.display = "none";
            countdownElement.classList.add("hidden")
            messageElement.classList.remove("hidden");
            imageElement.classList.remove("hidden");
            buttonElement.classList.remove("hidden");

        }
        secondsLeft--;
    }
    
    updateClock();
    let countdown = setInterval(updateClock, 1000);
});
