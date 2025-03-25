// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {

    // Load saved theme from localStorage, if any
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        document.body.classList.add(`${savedTheme}-theme`);
    } else {
        document.body.classList.add("lavender-theme"); // Default theme
    }

    // Handle theme switching
    document.querySelectorAll(".theme-button").forEach(button => {
        button.addEventListener("click", () => {
            const theme = button.getAttribute("data-theme");

            // Remove old theme classes and apply the new one
            document.body.classList.remove("lavender-theme", "pink-theme", "green-theme");
            document.body.classList.add(`${theme}-theme`);

            // Save the selected theme to localStorage
            localStorage.setItem("selectedTheme", theme);
        });
    });

    // Reset tasks when the "Reset Tasks" button is clicked
    document.getElementById("resetTasks").addEventListener("click", () => {
        document.querySelectorAll(".task textarea").forEach(textarea => {
            textarea.value = "";  // Clear text
        });
        document.querySelectorAll(".task input[type='checkbox']").forEach(checkbox => {
            checkbox.checked = false;  // Uncheck all checkboxes
        });
    });
});
