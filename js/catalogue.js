let enrollments = [];

let cartButton = document.getElementById("cartButton");
let cartStatusLabel = document.getElementById("cartLabel");

document.querySelectorAll(".enrollment").forEach(child => {
    child.addEventListener("click", enroll);
});

cartButton.addEventListener("click", () => {
    if (enrollments.length == 0) {
        cartStatusLabel.style = "display: inline;";
    } else {
        cartStatusLabel.style = "display: none;";
        window.location.href = "html/cart.html?courses=" + enrollments.join(",");
    }
});

function enroll() {
    cartStatusLabel.style = "display: none;";

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

    document.getElementById("amountItems").innerText = enrollments.length;
    cartButton.classList.remove("btn-outline-danger");
    cartButton.classList.add("btn-success");

    let cartSymbol = document.getElementById("cartSymbol")

    cartSymbol.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5
    0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
    </svg>`;

    if (enrollments.length == 0) {
        cartButton.classList.remove("btn-success");
        cartButton.classList.add("btn-outline-danger");

        cartSymbol.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313
        7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>`;
    }
}
