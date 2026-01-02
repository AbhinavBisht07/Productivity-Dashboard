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



function todoList() {
    var currentTasks = [];

    if (localStorage.getItem("currentTasks")) {
        // console.log("Task/tasks present in localStorage");
        currentTasks = JSON.parse(localStorage.getItem("currentTasks"));
    } else {
        console.log("Not a single task present in localStorage");
    }

    function renderTasks() {
        localStorage.setItem('currentTasks', JSON.stringify(currentTasks));
        let allTask = document.querySelector(".allTask");

        let sum = "";

        currentTasks.forEach(function (elem, idx) {
            // console.log(elem);
            sum += `<div class="task">
                    <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
                    <button id=${idx}>Mark as completed</button>
                </div>`
        });

        allTask.innerHTML = sum;
    }
    renderTasks();


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

        location.reload();
        // taskInput.value = "";
        // taskDetailsInput.value = "";
        // taskCheckBox.checked = false;
    })


    //Delete tasks using Mark as Complete button:-
    let markCompletedBtns = document.querySelectorAll(".allTask .task button");
    markCompletedBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            // console.log(btn.id);
            currentTasks.splice(btn.id, 1);

            renderTasks();
            location.reload();
        })
    })
}

todoList();