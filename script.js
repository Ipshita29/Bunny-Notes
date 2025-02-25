document.addEventListener("DOMContentLoaded", async () => {
    // Supabase Setup
    const { createClient } = supabase;
    const SUPABASE_URL = "your-supabase-url";  // Replace with your actual Supabase URL
    const SUPABASE_KEY = "your-anon-key";  // Replace with your actual Supabase Key
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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

    // Load tasks from Supabase
    async function loadTasks() {
        const { data, error } = await supabase.from('tasks').select('*');
        if (error) {
            console.error("Error fetching tasks:", error);
            return;
        }

        data.forEach(task => {
            let taskElement = document.createElement("div");
            taskElement.classList.add("task");
            taskElement.innerHTML = `
                <textarea>${task.content}</textarea>
                <input type="checkbox" ${task.completed ? "checked" : ""}>
            `;
            document.getElementById("tasksContainer").appendChild(taskElement);
        });
    }
    await loadTasks(); // Load tasks when page loads

    // Save tasks to Supabase
    async function saveTasks() {
        let tasks = [];
        document.querySelectorAll(".task").forEach(task => {
            let content = task.querySelector("textarea").value;
            let completed = task.querySelector("input[type='checkbox']").checked;
            tasks.push({ content, completed });
        });

        // Clear existing tasks in Supabase
        await supabase.from("tasks").delete().neq("id", 0);

        // Insert new tasks
        await supabase.from("tasks").insert(tasks);
    }

    // Save when tasks are modified
    document.getElementById("tasksContainer").addEventListener("input", saveTasks);

    // Reset Tasks Button
    document.getElementById("resetTasks").addEventListener("click", async () => {
        document.querySelectorAll(".task textarea").forEach(textarea => {
            textarea.value = ""; // Clear task text
        });

        document.querySelectorAll(".task input[type='checkbox']").forEach(checkbox => {
            checkbox.checked = false; // Uncheck all tasks
        });

        // Clear tasks from Supabase
        await supabase.from("tasks").delete().neq("id", 0);
    });
});
