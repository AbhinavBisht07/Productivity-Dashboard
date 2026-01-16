// abhi humara time kuch esa dikh ra :- 25:0, 25:7, 9:9 ... but humko wo esa dikha hai :- 25:00, 25:07, 9:09 ... to iss cheez ko karne ke liye ek method aata hai padStart()
// The JavaScript **String.prototype.padStart()** method is used to pad the beginning (left side) of a string with a specified character or string until the resulting string reaches a given length. 
// JavaScript ka **String.prototype.padStart()** method string ke starting (left side) mein extra characters add karne ke liye use hota hai, jab tak string ki length given length ke equal nahi ho jaati.
// similarly padEnd ending mein bole to right side mein extra chars add karta hai
// padStart() ke andar 2 arguments hote hain:
// 1️. Final string ki total length (kitni length ki string chahiye)
// 2️. Wo character ya string jo left side ke empty spaces ko fill karega
// const str1 = "5";
// Agar final length 2 di hai aur fill character "0" hai,
// to output "05" banega
// console.log(str1.padStart(2, "0"));
// Agar final length 4 di hoti,
// to output "0005" hota

function pomodoroTimer() {
    let session = document.querySelector(".pomodoro-fullPage h1.session");
    let timer = document.querySelector(".pomo-timer h1.timer");
    let startBtn = document.querySelector(".pomo-timer .start-timer");
    let pauseBtn = document.querySelector(".pomo-timer .pause-timer");
    let resetBtn = document.querySelector(".pomo-timer .reset-timer");

    let isWorkSession = true;

    // let totalSeconds = 25 * 60; 
    // or we can directly write :-
    let totalSeconds = 1500;
    let timerInterval = null;


    function updateTimer() {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60; //iska logic ye hai ki.. starting mein 1500 % 60 hoga to humko 0 seconds milega REMAINDER ..suppose totalseconds se ek second kam hua mtlb 1499 hua to 1499%60 humko dega 59 ... similarly 1498%60 will give 58 , 1497%60 -> 57 ... ese karte karte seconds wala time kam hota rahega ...jese jese totalSeconds kam hote rahenge. 
        // console.log(minutes, seconds);

        timer.innerHTML = `${String(minutes)}:${String(seconds).padStart(2, "0")}`;
    }
    updateTimer();

    function startTimer() {
        clearInterval(timerInterval);

        if(isWorkSession){
            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    updateTimer();
                }
                else {
                    isWorkSession = false;
                    clearInterval(timerInterval);
                    timer.innerHTML = "05:00";
                    totalSeconds = 5*60
                    session.innerHTML = "Little Break";
                    session.style.backgroundColor = 'var(--darkBlue)';
                }
            }, 1000);
        }
        else{
            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    updateTimer();
                }
                else {
                    isWorkSession = true;
                    clearInterval(timerInterval);
                    timer.innerHTML = "25:00";
                    totalSeconds = 25*60;
                    session.innerHTML = "Work Session";
                    session.style.backgroundColor = 'var(--darkGreen)';
                }
            }, 1000);
        }


    }

    function pauseTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        totalSeconds = 1500;
        clearInterval(timerInterval);
        updateTimer();
    }


    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);
}

export default pomodoroTimer;