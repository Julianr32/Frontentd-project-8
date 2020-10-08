/* ======TOGGLE-MENU====== */
/* ======END-TOGGLE-MENU====== */
/* ======TABS====== */
const tabBtns = document.querySelectorAll(".tab-btn");
const featuresCont = document.querySelector(".features-wrapper");
const feature = document.querySelectorAll(".feature");

featuresCont.addEventListener("click", (e) => {

    const id = e.target.dataset.id;
    if (id) {
        //Remove active class from buttons.
        tabBtns.forEach((btn) => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        //Hide other features.
        feature.forEach((tab) => {
            tab.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
/* ======END-TABS======*/

/* ======FAQ====== */
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    const questionbtn = question.querySelector(".question-btn");

    questionbtn.classList.toggle("rotate");
    questionbtn.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show");
            }
        });
        question.classList.toggle("show");
    });
});
/* ======END-FAQ====== */

/* ======ALERT====== */
const submitEmail = document.querySelector(".form-btn");
const alert = document.querySelector(".alert-span");
const alertCon = document.querySelector(".alert-message");
const email = document.getElementById("input-email");
const errorIcon = document.querySelector(".error-icon");
//Event listeners.
submitEmail.addEventListener("click", () => {
    submit();
});
email.addEventListener("keyup", (e) => {
    const key = e.key;
    if (key === "Enter") {
        submit();
    }
});
//Submit email function.
function submit() {
    if (email.value.length > 0) {
        if (emailIsValid(email.value)) {
            displayAlert("Email submited!", "success");
        } else {
            displayAlert("Whoops, make sure it's an email!", "danger");
        }
    } else if (!email.value) {
        displayAlert("Whoops, make sure it's an email!", "danger");
    }
};

//Alert function.
function displayAlert(text, action) {
    alert.textContent = text;
    alertCon.classList.add(`${action}`);

    if (action === "danger") {
        errorIcon.classList.add("show");
    }

    setTimeout(() => {
        alertCon.classList.remove(`${action}`);
        errorIcon.classList.remove("show");

    }, 3000);
};

//Function that validates the email.
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
/* ======END-ALERT====== */