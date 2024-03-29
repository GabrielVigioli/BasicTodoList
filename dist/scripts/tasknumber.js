let task_counter = 0; // Define task_counter in the global scope

addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting
        task_counter += 1; // Access task_counter in the submit event listener
        document.querySelectorAll('.task_value').forEach(element => {
            element.innerHTML = task_counter;
        });
    });
});