addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting
        var newLi = document.createElement("li");
        newLi.className = "tw-bg-task tw-p-5 tw-mb-3 tw-flex tw-rounded-lg tw-items-center tw-border tw-border-header";

        // Create the div element with checkbox
        var divCheckbox = document.createElement("div");
        divCheckbox.className = "tw-pl-2 tw-flex";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        divCheckbox.appendChild(checkbox);

        // Create the paragraph element
        var paragraph = document.createElement("p");
        paragraph.className = "tw-pl-5 tw-text-white";
        paragraph.textContent = form_value;

        // Create the button element
        var button = document.createElement("button");
        button.className = "tw-ml-auto";
        button.setAttribute('id', 'delete')

        var img = document.createElement("img");
        img.src = "/dist/imgs/trashbin.png";
        img.alt = "";
        img.width = "35";
        img.height = "35";
        button.appendChild(img);

        // Append divCheckbox, paragraph, and button to the new li element
        newLi.appendChild(divCheckbox);
        newLi.appendChild(paragraph);
        newLi.appendChild(button);

        // Get the ul element and append the new li element
        var ulElement = document.getElementById("task");
        ulElement.appendChild(newLi);

        button.addEventListener("click", function () {
            newLi.remove();
            task_counter -= 1
            document.getElementById('task_value').innerHTML = task_counter;
        });
    });

});
