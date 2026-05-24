console.log("Portfolio Loaded Successfully");

/* Smooth Fade Animation */

const cards = document.querySelectorAll(
    ".project-card, .skill-card, .edu-card, .cert-card"
);

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";

});