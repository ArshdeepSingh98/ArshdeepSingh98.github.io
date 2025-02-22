// Open Projects Modal when clicking the Projects button
document.getElementById("projectsLink").addEventListener("click", function () {
    document.getElementById("projectsModal").classList.add("active");
});


const filters = document.querySelectorAll(".projects-filters button");

filters.forEach((button) => {
    button.addEventListener("click", function () {
        // Remove active class from all buttons
        filters.forEach((btn) => btn.classList.remove("active"));

        // Add active class to the clicked button
        this.classList.add("active");

    });
});


// Close Projects Modal when clicking the close button
document.querySelector(".projects-close").addEventListener("click", function () {
    document.getElementById("projectsModal").classList.remove("active");
});




const carouselInner = document.querySelector(".projects-carousel-inner");
const projectCards = document.querySelectorAll(".project-card");
let currentIndex = 0;

function updateCarousel() {
    const cardWidth = projectCards[0].offsetWidth; // Get full width of card
    const translateValue = -currentIndex * (cardWidth + 90); // Move based on card width
    carouselInner.style.transform = `translateX(${translateValue}px)`;
}

function prevProject() {
    // console.log('prev')
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = projectCards.length - 1; // Loop back to last project
    }
    updateCarousel();
}

function nextProject() {
    // console.log('next')
    if (currentIndex < projectCards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to first project
    }
    updateCarousel();
}

// Initialize first slide position
updateCarousel();
