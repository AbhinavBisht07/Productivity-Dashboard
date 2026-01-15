import todoList from "./todoList.js";
import dailyPlanner from "./dailyPlanner.js";
import motivational from "./MotivationalQuote.js";
import pomodoroTimer from "./PomodoroTimer.js";
import dailyGoals from "./DailyGoals.js";
import weatherSection from "./WeatherSection.js";
import themeSection from "./ThemeSection.js";


function OpenAndCloseFeatures() {
    let allElems = document.querySelectorAll(".elem");
    let allFullElemPages = document.querySelectorAll(".fullElem");
    // console.log(allElems);

    let backBtns = document.querySelectorAll(".fullElem .back");

    allElems.forEach(function (elem) {
        // For opening elemPage
        elem.addEventListener("click", function () {
            allFullElemPages[elem.id].style.display = "block";
        });

        // For closing elemPage
        backBtns[elem.id].addEventListener("click", function () {
            allFullElemPages[elem.id].style.display = "none";
        })
    });
    
    
    let creditsBtn = document.querySelector("nav .nav-in div .creditsBtn");
    creditsBtn.addEventListener("click", function(){
        allFullElemPages[allFullElemPages.length-1].style.display = "block";
    })
    backBtns[allFullElemPages.length-1].addEventListener("click", function () {
        allFullElemPages[allFullElemPages.length-1].style.display = "none";
    })
}
OpenAndCloseFeatures();


todoList();

dailyPlanner();

motivational();

pomodoroTimer();

dailyGoals();

weatherSection();

themeSection();