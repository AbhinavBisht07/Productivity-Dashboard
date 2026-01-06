import todoList from "./todoList.js";
import dailyPlanner from "./dailyPlanner.js";
import motivational from "./MotivationalQuote.js";


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
}
OpenAndCloseFeatures();


todoList();

dailyPlanner();

motivational();