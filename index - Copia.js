const form = document.getElementById("form-devs");
const button = document.getElementById("button-show-form");
const contactSection = document.getElementById("info-dev");
const buttonSubmit = document.getElementById("btn-submit");
const developers = [];
let count = 0;
let inputRows = 0;

function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(type = "text", value, placeholder = "", name, id) {
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.id = id;
  input.value = value;
  input.placeholder = placeholder;
  return input;
}

button.addEventListener("click", function (ev) {
  ev.preventDefault();
  const ul = document.createElement("ul");

  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome da linguagem: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name-language";
  nameInput.placeholder = "Ex: JavaScript";
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);

  const h3 = document.createElement("h3");
  h3.innerText = "Tempo de experiência";

  const radioInput1 = document.createElement("input");
  radioInput1.type = "radio";
  radioInput1.name = "tempo-experiencia - " + count;
  radioInput1.id = "tempo-experiencia-1";
  radioInput1.value = "0-2";

  const label1 = document.createElement("label");
  label1.htmlFor = "tempo-experiencia-1";
  label1.textContent = "0 - 2 anos";

  const radioli1 = document.createElement("li");
  radioli1.appendChild(radioInput1);
  radioli1.appendChild(label1);

  const radioInput2 = document.createElement("input");
  radioInput2.type = "radio";
  radioInput2.name = "tempo-experiencia - " + count;
  radioInput2.id = "tempo-experiencia-2";
  radioInput2.value = "3-5";

  const label2 = document.createElement("label");
  label2.htmlFor = "tempo-experiencia-2";
  label2.textContent = "3 - 5 anos";

  const radioli2 = document.createElement("li");
  radioli2.appendChild(radioInput2);
  radioli2.appendChild(label2);

  const radioInput3 = document.createElement("input");
  radioInput3.type = "radio";
  radioInput3.name = "tempo-experiencia - " + count;
  radioInput3.id = "tempo-experiencia-3";
  radioInput3.value = "6+";

  const label3 = document.createElement("label");
  label3.htmlFor = "tempo-experiencia-3";
  label3.textContent = "6 ou mais anos";

  const radioli3 = document.createElement("li");
  radioli3.appendChild(radioInput3);
  radioli3.appendChild(label3);

  const btnDel = document.createElement("button");
  btnDel.innerText = "Remover bloco";
  btnDel.id = "btn-del";
  btnDel.addEventListener("click", function (ev) {});

  ul.appendChild(radioli1);
  ul.appendChild(radioli2);
  ul.appendChild(radioli3);
  ul.appendChild(document.createElement("br"));
  ul.appendChild(btnDel);

  contactSection.append(h3, ul);

  count++;
  console.log(count);

  buttonSubmit.style.display = "block";
});
