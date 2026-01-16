function todoList() {
    var currentTasks = [];

    if (localStorage.getItem("currentTasks")) {
        // console.log("Task/tasks present in localStorage");
        currentTasks = JSON.parse(localStorage.getItem("currentTasks"));
    } else {
        console.log("Not a single task present in localStorage");
    }

    // function renderTasks() {
    //     localStorage.setItem('currentTasks', JSON.stringify(currentTasks));
    //     let allTask = document.querySelector(".allTask");

    //     let sum = "";

    //     currentTasks.forEach(function (elem, idx) {
    //         // console.log(elem);
    //         sum += `<div class="task">
    //                 <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
    //                 <button id=${idx}>Mark as completed</button>
    //             </div>`
    //     });

    //     allTask.innerHTML = sum;
    // }
    // renderTasks();


    function renderTasks() {
        localStorage.setItem('currentTasks', JSON.stringify(currentTasks));
        let allTask = document.querySelector(".allTask");

        let sum = "";

        currentTasks.forEach(function (elem, idx) {
            sum += `<div class="task">
                        <div>
                            <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
                            <button id=${idx}>Mark as completed</button>
                        </div>

                        <div class="details">
                            <div class="buttons">
                                <span>Details</span>

                                <i class="down ri-arrow-down-s-line"></i>
                                <i class="up ri-arrow-up-s-line"></i>
                            </div>

                            <div class="content">${elem.details}</div>
                        </div>

                    </div>`
        });

        allTask.innerHTML = sum;

        showDetails();


        //Delete tasks using Mark as Complete button:-
        let markCompletedBtns = document.querySelectorAll(".allTask .task button");
        markCompletedBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                // console.log(btn.id);
                currentTasks.splice(btn.id, 1);

                renderTasks();
                // location.reload();
            })
        })
    }
    renderTasks();



    // details section:-
    function showDetails() {
        let detailBtns = document.querySelectorAll(".allTask .task .details .buttons");

        detailBtns.forEach(function (detailBtn) {
            let content = detailBtn.nextElementSibling;
            let opened = false;
            let downBtn = detailBtn.children[1];
            let upBtn = detailBtn.children[2];
            let parent = detailBtn.parentElement;

            detailBtn.addEventListener("click", function () {

                if (!opened) {
                    content.style.opacity = 1;
                    content.style.pointerEvents = "auto";
                    content.style.maxHeight = "60vh";
                    content.style.padding = "10px 20px";

                    parent.style.gap = "10px";

                    downBtn.style.display = "none";
                    upBtn.style.display = "inline";

                    opened = true;
                }
                else {
                    content.style.opacity = 0;
                    content.style.pointerEvents = "none";
                    content.style.maxHeight = "0px";
                    content.style.padding = "0px 20px";

                    parent.style.gap = "0px";

                    downBtn.style.display = "inline";
                    upBtn.style.display = "none";

                    opened = false;
                }
            });
        });
    }
    


    // Data storing and task rendering on form submission
    let form = document.querySelector(".todo-container .addTask form");
    let taskInput = document.querySelector(".addTask form #task-input");
    let taskDetailsInput = document.querySelector(".addTask form textarea");
    let taskCheckBox = document.querySelector(".addTask form #check ");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // console.log(taskInput.value);
        // console.log(taskDetailsInput.value);
        // // console.dir(taskCheckBox);
        // console.log(taskCheckBox.checked);

        currentTasks.push(
            {
                task: taskInput.value,
                details: taskDetailsInput.value,
                imp: taskCheckBox.checked,
            }
        );
        renderTasks();

        taskInput.value = "";
        taskDetailsInput.value = "";
        taskCheckBox.checked = false;
    })
}

export default todoList;