const mainContainer = document.getElementById("main");
const divs = mainContainer.querySelectorAll("div");

let currentDivIndex = 0;

function scrollToNextDiv() {
    if (currentDivIndex < divs.length - 1) {
        currentDivIndex++;
        const translateY = -currentDivIndex * 100;
        mainContainer.style.transform = `translateY(${translateY}vh)`;
    }
}

function scrollToPreviousDiv() {
    if (currentDivIndex > 0) {
        currentDivIndex--;
        const translateY = -currentDivIndex * 100;
        mainContainer.style.transform = `translateY(${translateY}vh)`;
    }
}

// Add event listeners to handle scrolling
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        scrollToNextDiv();
    } else if (e.key === "ArrowUp") {
        scrollToPreviousDiv();
    }
});

// Optionally, you can also use other user interactions (e.g., mousewheel) to trigger scrolling.
