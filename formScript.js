const addBtn = document.querySelector(".add");

const inputGroup = document.querySelector(".input-group");

function addInput() {
  const name = document.createElement("input");
  name.type = "text";
  name.className = "name";
  name.placeholder = "Nome completo do acompanhante";
  name.setAttribute("required", "");

  const p = document.createElement("p");
  p.innerHTML = "Obs.: Não é necessária a confirmação de presença de menores de 18 anos."

  const erroName = document.createElement("span");
  erroName.className = "msg-erro";

  const deleteBtn = document.createElement("a");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerHTML = "Excluir acompanhante";
  deleteBtn.style.marginTop = "10px"

  deleteBtn.addEventListener("click", removeInput);

  const divFlex = document.createElement("div");
  divFlex.className = "input-wrapper";

  divFlex.appendChild(name);
  divFlex.appendChild(p);
  divFlex.appendChild(deleteBtn);
  if(inputGroup.children.length < 2) {
    inputGroup.appendChild(divFlex);
  }
}

addBtn.addEventListener("click", addInput);

function removeInput() {
  this.parentElement.remove();
}