const parameters = document.querySelectorAll('.inparam')

for (let i = 0; i < parameters.length; i++) {
    const input = parameters[i].querySelector('input[type="range"]');
    const label = parameters[i].parentElement.querySelector('input[type="number"]');

    input.addEventListener('input', function() {
        label.value = input.value;
    });
}