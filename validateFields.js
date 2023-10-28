const requiredField = document.querySelector("[required]");

const submitButton = document.querySelector("#button");

submitButton.onclick = validateNameLoad;

requiredField.addEventListener("blur", () => validate(requiredField));

function validate(requiredField) {
    if(requiredField.className == 'name') {
        validateName(requiredField);
    }
}

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
        let msgErro = requiredField.parentNode.querySelector('.msg-erro-name');
        message = 'Seu nome não pode estar vazio.';
        msgErro.textContent = message;
        submitButton.disabled = true;
        submitButton.style.cursor = 'not-allowed';
    }
    else if (requiredField.value.length < 10) {
        message = 'Nome inválido. Insira seu nome completo.';
        msgErro.textContent = message;
        submitButton.disabled = true;
        submitButton.style.cursor = 'not-allowed';
    }
}
