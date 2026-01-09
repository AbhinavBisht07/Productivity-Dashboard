function dailyGoals() {
    var currentGoals = [];

    if (localStorage.getItem("currentGoals")) {
        // console.log("Goal/goals present in localStorage");
        currentGoals = JSON.parse(localStorage.getItem("currentGoals"));
    } else {
        console.log("Not a single goal present in localStorage");
    }

    function renderGoals() {
        localStorage.setItem('currentGoals', JSON.stringify(currentGoals));
        let allGoals = document.querySelector(".allGoals");

        let sum = "";

        currentGoals.forEach(function (elem, idx) {
            sum += `<div class="goal">
                        <span class=${elem.main}>Main Goal</span>
                        <div>

                            <h5 class="${elem.achieved ? "goalAchievedClass" : ''}">
                                ${elem.goal} 
                            </h5>

                            <div>
                                <button class="goalAchievedBtn">Goal Achieved</button>
                                <button id=${idx} class="removeBtn">Remove</button>
                            </div>
                        </div>
                    </div>`
        });

        allGoals.innerHTML = sum;



        // Celeberate achieved goals and then remove goals using remove button:-
        // function celebrate() {
        //     confetti({
        //         particleCount: 120,
        //         spread: 70,
        //         origin: { y: 0.6 }
        //     });
        // }
        function celebrate(particles, spreads) {
            confetti({
                particleCount: particles,
                spread: spreads,
                origin: { y: 0.6 }
            });
        }
        // let achieved = [];
        let goalTexts = document.querySelectorAll(".goal div h5");
        let goalAchievedBtns = document.querySelectorAll(".allGoals .goal .goalAchievedBtn");
        goalAchievedBtns.forEach(function (btn, idx) {
            btn.addEventListener("click", function () {
                if (currentGoals[idx].main) {
                    celebrate(500, 400);
                }
                else {
                    celebrate(70, 100);
                }
                currentGoals[idx].achieved = true;
                localStorage.setItem('currentGoals', JSON.stringify(currentGoals));
                renderGoals();
            })
        })
        let removeBtns = document.querySelectorAll(".allGoals .goal .removeBtn");
        removeBtns.forEach(function (btn, idx) {
            btn.addEventListener("click", function () {

                if (!currentGoals[idx].achieved) {
                    alert("Cannot remove Goals without acheiving them first !");
                    return;
                }
                currentGoals.splice(btn.id, 1);
                renderGoals();

            })
        })
    }
    renderGoals();

    // Data storing and goal rendering on form submission
    let form = document.querySelector(".daily-goals .addGoal form");
    let goalInput = document.querySelector(".addGoal form #goal-input");
    // let goalDetailsInput = document.querySelector(".addGoal form textarea");
    let goalCheckBox = document.querySelector(".addGoal form #tick");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log("sumitted");

        currentGoals.push(
            {
                goal: goalInput.value,
                main: goalCheckBox.checked,
                achieved: false,
            }
        );
        renderGoals();

        goalInput.value = "";
        goalCheckBox.checked = false;
    })


}

export default dailyGoals;