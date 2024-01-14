const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

function showMotivationalPhrase() {
const motivationalPhrases = [
    "Você consegue!",
    "Está quase lá!",
    "Persista!",
    "Foco!",
    "Não desiste agora!",
    "A cada segundo você fica mais forte!",
    "Agora é você contra você mesmo!",
];
const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
const phrase = motivationalPhrases[randomIndex];

const motivationalPhrasesElement = document.getElementById("motivationalPhrase");
motivationalPhrasesElement.textContent = phrase;
    console.log(phrase);
}




let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;
let lastDisplaySecond = -1;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    const motivationalPhrasesElement = document.getElementById("motivationalPhrase");
    motivationalPhrasesElement.textContent = "";
    interval = setInterval(() => {
        if(!isPaused) {
            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);

            if (seconds % 10 === 0 && lastDisplaySecond !== seconds){
                showMotivationalPhrase();
                lastDisplaySecond = seconds;
            }
        }

    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

    function pauseTimer() {
        isPaused = true;
        pauseBtn.style.display = "none";
        resumeBtn.style.display = "block";
    }

    function resumeTimer(){
        isPaused = false;
        pauseBtn.style.display = "block";
        resumeBtn.style.display = "none";
    }

    function resetTimer() {
        clearInterval(interval);
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        isPaused = false;

        minutesEl.textContent = "00"
        secondsEl.textContent = "00"
        millisecondsEl.textContent = "000"

        startBtn.style.display = "block"
        pauseBtn.style.display = "none"
        resumeBtn.style.display = "none"

        const motivationalPhrasesElement = document.getElementById("motivationalPhrase");
        motivationalPhrasesElement.textContent = "";
    }

    

function formatTime(time) {
    return time < 10 ? `0${time}`: time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}



