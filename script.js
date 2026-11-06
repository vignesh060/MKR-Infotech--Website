
/* MKR INFOTECH JAVASCRIPT */

console.log("MKR Infotech Website Loaded Successfully!");

/* GET STARTED BUTTON */

const startButton = document.querySelector(".primary-btn");

if (startButton) {

    startButton.addEventListener("click", function(event) {

        event.preventDefault();

        alert("Welcome to MKR Infotech! Let's start building.");

    });

}


/* TEMPLATE REDIRECTION */

function useTemplate(templateName) {

    const templatePages = {

        portfolio: "portfolio.html",
        business: "business.html",
        restaurant: "restaurant.html",
        ecommerce: "ecommerce.html",
        agency: "agency.html"

    };

    const selectedPage = templatePages[templateName];

    if (selectedPage) {

        window.location.href = selectedPage;

    } else {

        alert("Template not found!");

    }

}


/* FOOTER CURRENT YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* SMOOTH SCROLLING */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        if (this.classList.contains("primary-btn")) return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
