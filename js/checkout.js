const COURSES = {
    "C++":        { price: 39.99, name: "Ultimate C++ Course" },
    "Java":       { price: 29.99, name: "Intermediate Java Course" },
    "Python":     { price: 29.99, name: "Intermediate Python Course" },
    "Rust":       { price: 19.99, name: "Beginner Rust Course" },
    "JavaScript": { price: 19.99, name: "Beginner JavaScript Course" }
};
const TAX_AMOUNT = 0.10;

let queryString = window.location.search;
let cartItems = queryString
    .substring(queryString.indexOf("courses=") + 8)
    .split(",");

let totalNoTax = 0;

if (cartItems.length == 0 && cartItems[0] == "") {
    window.location.href = "/index.html";
}

document.getElementById("formInputs").addEventListener('submit', handleForm);
function handleForm(event) { event.preventDefault(); } 

cartItems.forEach(item => {
    totalNoTax += COURSES[item].price;
});

let totalTax = totalNoTax * TAX_AMOUNT;

document.getElementById("totalAmount").innerHTML = `&emsp;&emsp;$${totalNoTax.toFixed(2)}`;
document.getElementById("taxAmount").innerHTML = `&emsp;&emsp;$${totalTax.toFixed(2)}`;
document.getElementById("total").innerHTML = `&emsp;&emsp;$${(totalNoTax + totalTax).toFixed(2)}`;

let selectionList = document.getElementById("selections");
for (let i = 0; i < cartItems.length; i++) {
    let this_course = COURSES[cartItems[i]];
    selectionList.innerHTML += `<tr><th>${this_course.name}</th><th>&emsp;$${this_course.price}</th></tr>`;
}

document.getElementById("confirmPurchase").addEventListener("click", () => {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let studentID = document.getElementById("studentID");

    if (! emptyFields([firstName, lastName, email, studentID])) {
        alert("Thanks for your purchase, " + firstName.value + "!\nPlease check your email for your receipt.");
        window.location.href = "/index.html";
    } else {
        alert("Please fill out all fields.");
    }
});

document.getElementById("cancelPurchase").onclick = () => {
    window.location.href = "/index.html";
};

function emptyFields(fields) {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value == "") {
            return true;
        }
    }
    return false;
}
