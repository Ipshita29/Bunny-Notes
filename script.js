document.addEventListener("DOMContentLoaded", function () {
    // Greeting message
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        const hours = new Date().getHours();
        let greetingText = "Good Morning! ☀️";
        if (hours >= 12 && hours < 18) greetingText = "Good Afternoon! 🌤️";
        else if (hours >= 18) greetingText = "Good Evening! 🌙";
        greetingElement.innerText = greetingText;
    }

    // Affirmation message
    const affirmationElement = document.getElementById("affirmation");
    if (affirmationElement) {
        const affirmations = [
            "You are capable of amazing things! 💖",
            "Trust the timing of your life ⏳✨",
            "Small steps lead to big changes 🚀",
            "You are enough, just as you are 💕"
        ];
        affirmationElement.innerText = affirmations[Math.floor(Math.random() * affirmations.length)];
    }
});
