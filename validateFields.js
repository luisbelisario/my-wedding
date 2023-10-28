const requiredField = document.querySelector("[required]");

const submitButton = document.querySelector("#button");

requiredField.addEventListener("blur", () => validateName(requiredField));

window.onload = function() {
    validateNameLoad();
};

function validateName(name) {
    let message = '';
    let msgErro = name.parentNode.querySelector('.msg-erro-name');
    if (name.value === '') {
        message = 'Seu nome não pode estar vazio.';
        msgErro.textContent = message;
        submitButton.disabled = true;
        submitButton.style.cursor = 'not-allowed';
    }
    else if(name.value.length < 10) {
        message = 'Nome inválido. Insira seu nome completo.';
        msgErro.textContent = message;
        submitButton.disabled = true;
        submitButton.style.cursor = 'not-allowed';
    } else {
        let message = '';
        msgErro.textContent = message;
        submitButton.disabled = false;
        submitButton.style.cursor = 'pointer';
    }
}

function validateNameLoad() {
    if (requiredField.value === '') {
        submitButton.disabled = true;
        submitButton.style.cursor = 'not-allowed';
    }
}