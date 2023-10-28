const requiredFields = document.querySelectorAll("[required]");

requiredFields.forEach((field) => {
    field.addEventListener("blur", () => validate(field));
});

function validate(field) {
    if(field.className == 'name') {
        validateName(field);
    }
}


function validateName(name) {
    let message = '';
    let msgErro = name.parentNode.querySelector('.msg-erro-name');
    const submitButton = document.querySelector("#button");
    if (name.value === '') {
        message = 'Nome não pode estar vazio';
        msgErro.textContent = message;
        submitButton.disabled = true;
        submitButton.style.cursor = 'not-allowed';
    }
    else if(name.value.length < 3) {
        message = 'Nome inválido';
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

function validateRG(rg) {
    console.log(rg);
    let message = '';
    let msgErro = rg.parentNode.querySelector('.msg-erro-rg');
    console.log(msgErro);
    const submitButton = document.querySelector("#button");
    if(rg.value.length < 4 || rg.value.length > 10) {
        message = 'RG inválido';
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