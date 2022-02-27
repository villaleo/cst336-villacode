const COURSES = ["C++", "Java", "Python", "Rust", "JavaScript"];
let enrollments = [];

let cartButton = document.getElementById("cartButton");
cartButton.addEventListener("click", () => {
    console.log("Hello");
});

function enroll() {
    console.log(this);
    if (enrollments.indexOf(this.value) == -1) {
        enrollments.push(this.value);
        this.classList.remove("btn-outline-warning");
        this.classList.add("btn-success");
        this.innerHTML = "Added to cart";
    } else {
        enrollments.splice(enrollments.indexOf(this.value), 1);
        this.classList.remove("btn-success");
        this.classList.add("btn-outline-warning");
        this.innerHTML = "Enroll";
    }

    console.log(`Courses: [${enrollments}]`);
}

function submitCourses() {
    let buttonStatusLabel = document.getElementById("cartLabel");
    buttonStatusLabel.style = enrollments.length == 0? "display: inline;" : "display: none;";
}

let enrollmentSelector = document.querySelectorAll(".enrollment");
enrollmentSelector.forEach(child => {
    child.addEventListener("click", enroll);
});
