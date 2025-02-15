document.addEventListener("DOMContentLoaded", () => {
    // Theme switching
    document.querySelectorAll(".theme-button").forEach(button => {
        button.addEventListener("click", function() {
            let theme = this.getAttribute("data-theme");

            // Remove previous themes
            document.body.classList.remove("pink-theme", "lavender-theme", "green-theme");

            // Apply new theme
            document.body.classList.add(`${theme}-theme`);

            // Save to localStorage to persist theme
            localStorage.setItem("selectedTheme", theme);
        });
    });

    // Load saved theme on page load
    let savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        document.body.classList.add(`${savedTheme}-theme`);
    }

    // Reset Tasks Button
    document.getElementById("resetTasks").addEventListener("click", () => {
        document.querySelectorAll(".task textarea").forEach(textarea => {
            textarea.value = ""; // Clear task text
        });

        document.querySelectorAll(".task input[type='checkbox']").forEach(checkbox => {
            checkbox.checked = false; // Uncheck all tasks
        });
    });
});
