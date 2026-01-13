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
                        <div class="alert">
                            <p>Cannot remove Goals without acheiving them first !</p>
                            <button class="alertCloseBtn">OK</button>
                        </div>

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
        let goalRemoveMessages = [
            "Cannot remove goals without achieving them first 🫠",
            "Goals aren’t meant to be removed, achieve them first 🫠",
            "No shortcuts 🙂. Achieve the goal first.",
            "Goal removal is disabled until it’s achieved 🙂",
            "Complete the goal to unlock the remove option 🙂",
            "Nice try 😄 Achieve it first!",
            "This goal isn’t done with you yet 😈",
            "Achievement pending… try again later.",
            "This goal still believes in you 🥺. Please complete it 🥀",
            "No escape 👿 Complete me first!",
            "Quest incomplete ⚔️",
            "Mission not cleared yet 🤖",
            "Objective still active 🤖",
            "Boss fight not finished 👾",
            "Abandoning quest? Not allowed 😈",
            "You haven’t cleared this level yet 🎮",
            "Final boss still standing 😈",
            "Boss not defeated yet 👾",
            "System check failed: Objective incomplete 🤖",
            "Win the game before quitting 🎮",
            "You can’t rage-quit this one bro 🤣😭",
            "Running away already? 🤣",
            "Finish what you started !! 🤬",
            "Rage-quit blocked 😈",
            "Skill issue. Try completing it 🙂‍↔️",
            "逃げられない (You can’t escape).",
            "No achievement. No escape 👾.",
            "Request denied. Reason: unfinished business 🤖",
            "Incomplete objectives cannot be erased 🙂‍↔️",
            "Integrity check failed 😶‍🌫️",
            "Ah yes. The ‘delete it’ phase 🥱",
            "Bold move for an unfinished task 🥀",
            "Sure… after completion🫠",
            "Goals aren’t deleted, they’re achieved 🙂‍↔️",
            "Achievement comes before removal 🙂‍↔️",
            "This goal is waiting to be achieved, not erased 🫠",
            "Achieve the goal first. The delete button will wait 🙂‍↔️",
            "Running from goals isn’t achievement 😶‍🌫️",
            "No achievement? No removal 👺",
            "Achievement required to remove this goal 🙂‍↔️",
            "This goal refuses to leave without being achieved 🫠",
            "Achievement pending. Goal stays 👺",
            "Unachieved goals can’t be removed 🫠",
            "Achieve it first ! 👺",
            "Deleting goals won’t delete regret 😶‍🌫️",
            "No achievement? No exit 🙃",
            "Goal said: ‘Not without achievement.’ 🙂‍↔️",
            "Finish it before deleting ! 👺",
            "Finish it !👺",
            "No shortcuts 🙃",
            "No escape 🙃",
            "Complete first ! 👺",
            "Do the work ! 👺",
            "Complete your goal first. Stay locked in gang ! 🥷",
        ];
        function celebrate(particles, spreads) {
            confetti({
                particleCount: particles,
                spread: spreads,
                origin: { y: 0.6 }
            });
        }
        // let goalTexts = document.querySelectorAll(".goal div h5");
        let goalAchievedBtns = document.querySelectorAll(".allGoals .goal div div .goalAchievedBtn");
        goalAchievedBtns.forEach(function (btn, idx) {
            btn.addEventListener("click", function () {
                if (currentGoals[idx].main) {
                    celebrate(800, 400);
                }
                else {
                    celebrate(70, 400);
                }
                currentGoals[idx].achieved = true;
                localStorage.setItem('currentGoals', JSON.stringify(currentGoals));
                renderGoals();
            })
        })


        let removeBtns = document.querySelectorAll(".allGoals .goal div div .removeBtn");
        let alertMsgs = document.querySelectorAll(".allGoals .goal .alert");
        let alertCloseBtns = document.querySelectorAll(".allGoals .goal .alertCloseBtn")
        removeBtns.forEach(function (btn, idx) {
            btn.addEventListener("click", function () {
                if (!currentGoals[idx].achieved) {
                    let randomMsgIdx = Math.floor(Math.random() * goalRemoveMessages.length);
                    // console.log(randomMsgIdx);

                    alertMsgs[idx]
                        .querySelector("p")
                        .innerText = `${goalRemoveMessages[randomMsgIdx]}`;

                    alertMsgs[idx].style.top = 0;
                    return;
                }
                currentGoals.splice(btn.id, 1);
                renderGoals();

            })
        })
        //for closing alert messages :-
        alertCloseBtns.forEach((btn, idx) => {
            btn.addEventListener("click", function () {
                alertMsgs[idx].style.top = `${-100}%`;
            })
        })
    }
    renderGoals();


    
    // Data storing and goal rendering on form submission
    let form = document.querySelector(".daily-goals .addGoal form");
    let goalInput = document.querySelector(".addGoal form #goal-input");
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