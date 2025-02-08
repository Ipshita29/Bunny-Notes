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
            "You are enough, just as you are 💕",
            "Believe in yourself and all that you are 🌟",
            "Your dreams are valid, and you can achieve them 💭✨",
            "You are stronger than you think 💪💖",
            "Happiness is a journey, not a destination 🛤️😊",
            "Your kindness makes the world a better place 💕🌍",
            "You have the power to create change 🔥💫",
            "You are worthy of love and joy ❤️✨",
            "Embrace the magic of new beginnings 🌱💖",
            "Your potential is limitless 🚀🌟",
            "One step at a time, you are moving forward 🏃‍♀️💡",
            "The best is yet to come, keep going! 🌈🌞",
            "You inspire others just by being yourself 🌟💖",
            "You deserve all the good things coming your way 🎁💛",
            "Shine bright, because the world needs your light ✨💫",
            "Everything you need is already within you 🌿💖",
            "Progress, not perfection – keep growing 🌱📈",
            "Your hard work will pay off, keep pushing 💼💪",
            "You are brave, strong, and resilient 🦋💜",
            "You bring positivity wherever you go ☀️💖",
            "You are learning and evolving every day 🌸📖",
            "Your presence is a gift to the world 🎁🌍"
        ];
        affirmationElement.innerText = affirmations[Math.floor(Math.random() * affirmations.length)];
    }
});
