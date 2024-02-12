let form_value;

addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting
        form_value = document.getElementById('text').value
        console.log(form_value)
        document.getElementById('text').value = ''

    })

});

