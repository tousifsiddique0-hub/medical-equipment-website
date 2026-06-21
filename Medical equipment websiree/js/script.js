window.addEventListener("scroll", function () {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (position < screenPosition) {
            card.classList.add("show");
        }
    });
});