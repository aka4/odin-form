const firstPasswordField = document.querySelector('#pass')
const secondPasswordField = document.querySelector('#confpass')


secondPasswordField.addEventListener('input', () => {
    if (firstPasswordField.value !== secondPasswordField.value) {
        secondPasswordField.style.cssText = 'border-color: red'
        firstPasswordField.style.cssText = 'border-color: red'

    }
    if (firstPasswordField.value == secondPasswordField.value) {
        secondPasswordField.style.cssText = 'border-color: green'
        firstPasswordField.style.cssText = 'border-color: green'
    }
});


