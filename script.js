document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const themeButtons = document.querySelectorAll(".theme-button");
    
    // Load stored theme
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        body.className = savedTheme;
    }

    // Theme Switching
    themeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const newTheme = this.dataset.theme;
            body.className = newTheme;
            localStorage.setItem("selectedTheme", newTheme);
        });
    });

    // Dynamic Greeting
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        const hours = new Date().getHours();
        let greetingText = "Good Morning! ☀️";
        if (hours >= 12 && hours < 18) greetingText = "Good Afternoon! 🌤️";
        else if (hours >= 18) greetingText = "Good Evening! 🌙";
        greetingElement.innerText = greetingText;
    }

    // Affirmations
    const affirmationElement = document.getElementById("affirmation");
    if (affirmationElement) {
        const affirmations = [
            "You are capable of amazing things! 💖",
            "Believe in yourself and all that you are 🌟",
            "Your hard work will pay off, keep pushing 💼💪",
            "The best is yet to come, keep going! 🌈🌞"
        ];
        affirmationElement.innerText = affirmations[Math.floor(Math.random() * affirmations.length)];
    }

    // Task Persistence
    const tasks = document.querySelectorAll("textarea");
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    
    tasks.forEach((task, index) => {
        task.value = localStorage.getItem(`task${index}`) || "";
        task.addEventListener("input", () => localStorage.setItem(`task${index}`, task.value));
    });

    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = localStorage.getItem(`check${index}`) === "true";
        checkbox.addEventListener("change", () => localStorage.setItem(`check${index}`, checkbox.checked));
    });
});
