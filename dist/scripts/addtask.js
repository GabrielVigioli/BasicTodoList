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
        checkbox.className = "checked_content";
        divCheckbox.appendChild(checkbox);



        // Create the paragraph element
        var paragraph = document.createElement("p");
        paragraph.className = "tw-pl-5 tw-text-white task-paragraph";
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
            if (checkbox.checked) {
                checkbox.checked = false; // Uncheck the checkbox if it's checked before rem qoval
                // Update checked_boxes count
                let checked_boxes = document.querySelectorAll('.checked_content:checked').length;
                document.querySelector('.task_completed').textContent = checked_boxes;
            }
            newLi.remove();
            task_counter -= 1;
            document.querySelectorAll('.task_value').forEach(element => {
                element.innerHTML = task_counter;
            });
            sendCheckedToEnd()
        });

        checkbox.addEventListener('change', function () {
            let checkboxes = document.querySelectorAll('.checked_content');
            let checked_boxes = 0;
            checkboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    checked_boxes++;
                    checkbox.closest('li').querySelector('.task-paragraph').classList.add('tw-line-through', "tw-text-stone-400");
                } else {
                    // Remove a classe do parágrafo quando o checkbox é desmarcado
                    checkbox.closest('li').querySelector('.task-paragraph').classList.remove('tw-line-through', "tw-text-stone-400");
                }
            });

            // Atualiza o texto do elemento .task_completed com o valor atualizado
            let completedElement = document.querySelector('.task_completed');
            completedElement.textContent = checked_boxes;
            sendCheckedToEnd()
        })
    });

    function sendCheckedToEnd() {
        // Seleciona todos os itens da lista
        var items = document.querySelectorAll('#task li');

        // Array para armazenar itens marcados
        var checkedItems = [];

        // Percorre todos os itens
        items.forEach(function (item) {
            // Verifica se a caixa de seleção está marcada
            if (item.querySelector('.checked_content').checked) {
                // Move o item para a lista de itens marcados
                checkedItems.push(item);
            }
        });

        // Remove os itens marcados da lista original
        checkedItems.forEach(function (item) {
            item.remove();
        });

        // Adiciona os itens marcados de volta ao final da lista
        checkedItems.forEach(function (item) {
            document.getElementById("task").appendChild(item);
        });
    }

    // Adicione esta função onde você precisar chamar a reordenação, por exemplo, após excluir uma lista
    sendCheckedToEnd();
});
