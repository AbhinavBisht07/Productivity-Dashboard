function dailyPlanner(){
    let dayPlanInputData = JSON.parse(localStorage.getItem('dayPlanInputData')) || {};
    // console.log(dayPlanInputData) ;
    
    let dayPlanner = document.querySelector(".day-planner");
    let sum = '';
    //this will give an array containing timings(5:00, 6:00, etc) ..we gave the array length 18 because ... mostly 18 hours a day a person can work .. atleast 6-8 hours are for sleep.
    let hours = Array.from({length:18}, (elem, idx)=>{
        return `${5+idx}:00 - ${6+idx}:00`; 
    });
    hours.forEach(function(elem, idx){
        // console.log(dayPlanInputData[idx] || '');
        let savedInputData = dayPlanInputData[idx] || '';
    
        // console.log(elem);
        sum +=  `<div class="day-planner-time">
        <p>${elem}</p>
        <input id=${idx} type="text" placeholder="..." value="${savedInputData}">
        </div>`
        dayPlanner.innerHTML = sum;
    });
    
    // At first i had given the value like this :- value = ${savedInputData}...the problem with this was that if i was writing text having spaces in the input then ..they were getting saved perfectly in the localStorage but on refresh only the text before the space was appearing on the input in screen(although it was getting stored perfectly in localStorage) ... this was happening because the browser was reading it in a different way .. as HTML stops reading attribute values at the first space unless the value is wrapped in quotes.... thats why i had to do value = "${savedInputData}"
    
    
    let dayPlannerInput = document.querySelectorAll(".day-planner .day-planner-time input");
    
    dayPlannerInput.forEach(function(elem,idx){
        elem.addEventListener("input", function(){
            // console.log(elem.id);
            // dayPlanInputData[elem.id] = elem.value;
            // console.log(dayPlanInputData);
    
            // console.log(idx);
            dayPlanInputData[idx] = elem.value;
            // console.log(dayPlanInputData);
            localStorage.setItem('dayPlanInputData', JSON.stringify(dayPlanInputData))
        })
    })
}


export default dailyPlanner;



