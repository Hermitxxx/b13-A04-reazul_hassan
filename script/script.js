// Toggle button functionality
// const toggleButtons = document.querySelectorAll('.toggle-items .btn');

// toggleButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         // Remove active state from all buttons
//         toggleButtons.forEach(btn => {
//             btn.classList.remove('bg-[#3B82F6]', 'text-white');
//             btn.classList.add('bg-white', 'text-black');
//         });

//         // Add active state to clicked button
//         button.classList.remove('bg-white', 'text-black');
//         button.classList.add('bg-[#3B82F6]', 'text-white');
//     });
// });

// Capture clicks on the jobs area

// GLOBAL VARIABLES
const smallSpan = document.getElementById("job-count");
const totalCount = document.getElementById("total-count");
// let totalJobCount = 8;
let interviewCountGlobal = 0;
let rejectedCountGlobal = 0;
const interviewCont = [];
const rejectedCont = [];

function updateInterViewCount(interviewSection) {
    const interviewCount = document.getElementById("interview-count");
    interviewCount.innerText = interviewSection.childElementCount;
}

function updateRejectedCount(rejectedSection) {
    const rejectedCount = document.getElementById("rejected-count");
    rejectedCount.innerText = rejectedSection.childElementCount;
}

// UPDATE JOB STATUS
function updateStatusInterview(jobStatus) {
    jobStatus.innerText = "INTERVIEW";
    jobStatus.style.color = "#10B981";
    jobStatus.style.borderColor = "#10B981";
}

// get initial count 
function getInitialCount(availableJobsArea) {
    const total_jobs = document.getElementById("total-jobs");
    total_jobs.innerText = availableJobsArea.childElementCount;
}

// update the (8 of 8 jobs span)
function smallSpanCountInterview(interviewSection) {
    smallSpan.innerText = interviewSection.childElementCount;
}

function smallSpanCountRejected(rejectedSection) {
    smallSpan.innerText = rejectedSection.childElementCount;
}

function smallSpanCountAll(availableJobsArea) {
    let childNumber = availableJobsArea.childElementCount;
    smallSpan.innerText = childNumber;
    totalCount.innerText = childNumber;
}

function updateStatusRejected(jobStatus) {
    jobStatus.innerText = "REJECTED";
    jobStatus.style.color = "#EF4444";
    jobStatus.style.borderColor = "#EF4444";
}

function renderInterView(cardBody) {
    const arrInt = Array.from(interviewSection.children);
    const cardHead = cardBody.querySelector(".card-title");
    for (let item of arrInt) {
        if (item.querySelector(".card-title").innerText === cardHead.innerText) {
            return;
        }
        else if (interviewSection.childElementCount !== 0) {
            break;
        }
    };
    interviewCont.push(cardBody);
    const newInterViewArea = document.getElementById("interview-jobs-area");
    const newCard = document.createElement("div");
    newCard.classList.add("card", "card-lg", "shadow-md", "bg-base-100", "p-10");
    newCard.innerHTML = cardBody.innerHTML;
    newInterViewArea.appendChild(newCard);
    // console.log(interviewCont.length);

}

function renderRejected(cardBody) {
    // console.log(rejectedSection);
    const arrRej = Array.from(rejectedSection.children);
    const cardHead = cardBody.querySelector(".card-title");
    for (let item of arrRej) {
        if (item.querySelector(".card-title").innerText === cardHead.innerText) {
            return;
        }
        else if (rejectedSection.childElementCount !== 0) {
            break;
        }
    };
    rejectedCont.push(cardBody);
    const newRejectedArea = document.getElementById("rejected-jobs-area");
    const newCard = document.createElement("div");
    newCard.classList.add("card", "card-lg", "shadow-md", "bg-base-100", "p-10");
    newCard.innerHTML = cardBody.innerHTML;
    newRejectedArea.appendChild(newCard);

    // console.log(rejectedCont.length);
}

// updates toggle style
function updateToggleColor(target) {
    // get all toggle buttons
    const all = document.getElementById("all");
    const interview = document.getElementById("interview");
    const rejected = document.getElementById("rejected");
    // reset all,rejected toggle styles
    interview.style.backgroundColor = "white";
    interview.style.color = "black";
    all.style.backgroundColor = "white";
    all.style.color = "black";
    rejected.style.backgroundColor = "white";
    rejected.style.color = "black";
    // update clicked toggle
    target.style.color = "white";
    target.style.backgroundColor = "#3B82F6";
}

// update areaTitle
function updateAreaTitle(target) {
    const getTitle = document.getElementById("areaTitle");
    getTitle.innerText = target.innerText;
}

// CORE LOGIC HERE
const jobsArea = document.getElementById("available-jobs-area");

jobsArea.addEventListener("click", function (event) {
    // get all sections
    const availableLastState = document.getElementById("available-empty-state");
    const availableJobsArea = document.getElementById("available-jobs-cards");
    const interviewSection = document.getElementById("interview-jobs-area");
    const rejectedSection = document.getElementById("rejected-jobs-area");
    const interviewInitial = document.getElementById("interview-initial-state");
    const rejectedInitial = document.getElementById("rejected-initial-state");
    const target = event.target;

    // Handle INTERVIEW button clicks on job cards
    if (target.classList.contains("btn-interview")) {
        const cardBody = target.closest(".card-body");
        const jobStatus = cardBody.querySelector(".job-status .btn");
        // updateTotalCount();
        updateStatusInterview(jobStatus);
        renderInterView(cardBody);
        updateInterViewCount(interviewSection);
        // const card = cardBody.closest('.available-card');
        // card.remove();
        // let childNumber = availableJobsArea.childElementCount;
        // smallSpan.innerText = childNumber;
        // smallSpanCountAll(availableJobsArea);
        // getInitialCount(availableJobsArea);

    }
    // Handle REJECTED button clicks on job cards
    else if (target.classList.contains("btn-rejected")) {
        const cardBody = target.closest(".card-body");
        const jobStatus = cardBody.querySelector(".job-status .btn");
        // updateTotalCount();
        updateStatusRejected(jobStatus);
        renderRejected(cardBody);
        updateRejectedCount(rejectedSection);
        // const card = cardBody.closest('.available-card');
        // card.remove();

    }
    // handle INTERVIEW TOOGLE click
    else if (target.classList.contains("interview")) {
        updateAreaTitle(target);
        updateToggleColor(target);
        smallSpanCountInterview(interviewSection);
        // smallSpanCount(cardBody);
        availableLastState.classList.add("hidden");
        availableJobsArea.classList.add("hidden");
        rejectedSection.classList.add("hidden");
        rejectedInitial.classList.add("hidden")
        // show sections logic
        if (interviewSection.childElementCount === 0) {
            interviewInitial.classList.remove("hidden");
        }
        else if (interviewSection.childElementCount !== 0) {
            interviewSection.classList.remove("hidden");
            interviewInitial.classList.add("hidden");
        }
    }
    else if (target.classList.contains("rejected")) {
        smallSpanCountRejected(rejectedSection);
        updateAreaTitle(target);
        updateToggleColor(target);
        availableLastState.classList.add("hidden");
        interviewSection.classList.add("hidden");
        interviewInitial.classList.add("hidden");
        availableJobsArea.classList.add("hidden");
        // show sections logic
        if (rejectedSection.childElementCount === 0) {
            availableJobsArea.classList.add("hidden");
            rejectedInitial.classList.remove("hidden");
        }
        else if (rejectedSection.childElementCount !== 0) {
            rejectedSection.classList.remove("hidden");
            rejectedInitial.classList.add("hidden");
        }
    }
    else if (target.classList.contains("all")) {
        updateAreaTitle(target);
        availableLastState.classList.add("hidden");
        availableJobsArea.classList.remove("hidden");
        interviewSection.classList.add("hidden");
        rejectedSection.classList.add("hidden");
        rejectedInitial.classList.add("hidden");
        interviewInitial.classList.add("hidden");
        updateToggleColor(target);
        smallSpanCountAll(availableJobsArea);
        if (availableJobsArea.childElementCount === 0) {
            availableLastState.classList.remove("hidden");
        }
        // console.log(availableJobsArea.childElementCount);
    }

    // capture clicks on available-jobs-cards delete btn
    else if (target.classList.contains("delete")) {
        const cardBody = target.closest(".card-body");
        const availableLastState = document.getElementById("available-empty-state");
        // availableLastState.classList.remove("hidden");
        // if the same card is in interview or rejected area

        const cardHead = cardBody.querySelector(".card-title");
        // console.log(cardHead.innerText);
        // console.log(interviewSection.children);
        const arrInt = Array.from(interviewSection.children);
        const arrRej = Array.from(rejectedSection.children);
        console.log(arrInt.length);
        // console.log(arr);
        // arrInt.forEach((item) => {
        //     console.log(item.querySelector(".card-title").innerText);
        // })

        if (interviewSection.childElementCount === 0 && rejectedSection.childElementCount === 0) {
            const card = cardBody.closest('.available-card');
            card.remove();
            smallSpanCountAll(availableJobsArea);
            getInitialCount(availableJobsArea);
        }
        else {
            // Check interview section
            if (arrInt.length !== 0) {
                for (let item of arrInt) {
                    if (item.querySelector(".card-title").innerText === cardHead.innerText) {
                        item.remove();
                        updateInterViewCount(interviewSection);
                        break;
                    }
                }
            }
            // Check rejected section
            if (arrRej.length !== 0) {
                for (let item of arrRej) {
                    if (item.querySelector(".card-title").innerText === cardHead.innerText) {
                        item.remove();
                        updateRejectedCount(rejectedSection);
                        break;
                    }
                }
            }
            // Remove from available section
            const card = cardBody.closest('.available-card');
            card.remove();
            smallSpanCountAll(availableJobsArea);
            getInitialCount(availableJobsArea);
        }

        // show no jobs if all jobs are deleted
        if (availableJobsArea.childElementCount === 0) {
            availableLastState.classList.remove("hidden");
        }
    }

});

// CARD TRANSFER TOGGLE FUNTIONALITY HERE
const availableJobsArea = document.getElementById("available-jobs-cards");
const interviewSection = document.getElementById("interview-jobs-area");
const rejectedSection = document.getElementById("rejected-jobs-area");
const interviewInitial = document.getElementById("interview-initial-state");
const rejectedInitial = document.getElementById("rejected-initial-state");

const interviewArea = document.getElementById("interview-jobs-area");
interviewArea.addEventListener("click", function (event) {
    target = event.target;
    // console.log(target);
    if (target.classList.contains("btn-rejected")) {
        const cardBody = target.closest(".card");
        const jobStatus = cardBody.querySelector(".job-status .btn");
        // console.log(jobStatus);
        updateStatusRejected(jobStatus);
        renderRejected(cardBody);
        // Remove the card first
        const card = cardBody.closest('.card');
        card.remove();
        // Then check if the section is empty
        if (interviewSection.childElementCount === 0) {
            interviewInitial.classList.remove("hidden");
        }
        smallSpanCountInterview(interviewSection);
        updateInterViewCount(interviewSection);
        updateRejectedCount(rejectedSection);
    }
    else if (target.classList.contains("delete")) {
        const cardBody = target.closest(".card");
        const card = cardBody.closest(".card");
        card.remove();
        updateInterViewCount(interviewSection);
        smallSpanCountInterview(interviewSection);
        if (interviewSection.childElementCount === 0) {
            interviewInitial.classList.remove("hidden");
        }
    }
})


const rejectedArea = document.getElementById("rejected-jobs-area");
rejectedArea.addEventListener("click", function (event) {
    target = event.target;
    // console.log(target);
    if (target.classList.contains("btn-interview")) {
        const cardBody = target.closest(".card");
        const jobStatus = cardBody.querySelector(".job-status .btn");
        // console.log(jobStatus);
        updateStatusInterview(jobStatus);
        renderInterView(cardBody);
        // Remove the card first
        const card = cardBody.closest('.card');
        card.remove();
        // Then check if the section is empty
        if (rejectedSection.childElementCount === 0) {
            rejectedInitial.classList.remove("hidden");
        }
        smallSpanCountRejected(rejectedSection);
        updateInterViewCount(interviewSection);
        updateRejectedCount(rejectedSection);
    }
    else if (target.classList.contains("delete")) {
        const cardBody = target.closest(".card");
        const card = cardBody.closest(".card");
        card.remove();
        updateRejectedCount(rejectedSection);
        smallSpanCountRejected(rejectedSection);
        if (rejectedSection.childElementCount === 0) {
            rejectedInitial.classList.remove("hidden");
        }
    }
})