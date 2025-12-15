// A. TOGGLE DARK MODE
document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


// B. EDIT JOB TITLE
document.getElementById("editJobBtn").addEventListener("click", function () {
    const jobTitle = document.getElementById("jobTitle");
    const newTitle = prompt("Enter new job title:");

    if (newTitle !== null && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle;
    }
});


// C. SHOW / HIDE SKILLS
document.getElementById("toggleSkillsBtn").addEventListener("click", function () {
    const skills = document.getElementById("skillsSection");

    if (skills.style.display === "none") {
        skills.style.display = "block";
        this.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        this.textContent = "Show Skills";
    }
});


// D. LIVE CHARACTER COUNTER
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");
const maxChars = 200;

msgBox.addEventListener("keyup", function () {
    counter.textContent = maxChars - msgBox.value.length;
});


// E. FORM VALIDATION
function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in Name and Email.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}


// F. DISPLAY TODAY'S DATE
document.getElementById("dateDisplay").textContent =
    new Date().toDateString();


// G. EXTRA FEATURE: GREETING BASED ON TIME
const greeting = document.createElement("h2");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning!";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
} else {
    greeting.textContent = "Good Evening!";
}

greeting.style.textAlign = "center";
document.body.prepend(greeting);
