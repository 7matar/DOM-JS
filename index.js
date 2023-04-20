const form = document.getElementById("form-devs");
const button = document.getElementById("button-show-form");
const contactSection = document.getElementById("info-dev");
const buttonSubmit = document.getElementById("btn-submit");
const developers = [];
let count_name = 0;
let count_index = 0;
let count = 0;

button.addEventListener("click", function (ev) {
  count++;
  const ul = document.createElement("ul");
  ul.className = "list-language";

  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome da linguagem: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name-language";
  nameInput.placeholder = "Ex: JavaScript";
  nameInput.id = "name-language-" + count_name;
  nameLi.id = "name-language-" + count_name;
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);

  const h3 = document.createElement("h3");
  h3.innerText = "Tempo de experiência";

  const radioInput1 = document.createElement("input");
  radioInput1.type = "radio";
  radioInput1.name = "tempo-experiencia-" + count_name;
  radioInput1.id = "tempo-experiencia-" + count_index;
  radioInput1.value = "0-2";

  const label1 = document.createElement("label");
  label1.htmlFor = "tempo-experiencia-" + count_index;
  label1.textContent = "0 - 2 anos";

  const radioli1 = document.createElement("li");
  radioli1.appendChild(radioInput1);
  radioli1.appendChild(label1);

  count_index++;

  const radioInput2 = document.createElement("input");
  radioInput2.type = "radio";
  radioInput2.name = "tempo-experiencia-" + count_name;
  radioInput2.id = "tempo-experiencia-" + count_index;
  radioInput2.value = "3-5";

  const label2 = document.createElement("label");
  label2.htmlFor = "tempo-experiencia-" + count_index;
  label2.textContent = "3 - 5 anos";

  const radioli2 = document.createElement("li");
  radioli2.appendChild(radioInput2);
  radioli2.appendChild(label2);

  count_index++;

  const radioInput3 = document.createElement("input");
  radioInput3.type = "radio";
  radioInput3.name = "tempo-experiencia-" + count_name;
  radioInput3.id = "tempo-experiencia-" + count_index;
  radioInput3.value = "6+";

  const label3 = document.createElement("label");
  label3.htmlFor = "tempo-experiencia-" + count_index;
  label3.textContent = "6 ou mais anos";

  const radioli3 = document.createElement("li");
  radioli3.appendChild(radioInput3);
  radioli3.appendChild(label3);

  count_index++;

  const btnDel = document.createElement("button");
  btnDel.type = "button";
  btnDel.innerText = "Remover bloco";
  btnDel.id = "btn-del-" + count_name;
  btnDel.addEventListener("click", function () {
    ul.remove();
    h3.remove();
    count--;
    if (count === 0) {
      buttonSubmit.style.display = "none";
    }
  });

  ul.appendChild(radioli1);
  ul.appendChild(radioli2);
  ul.appendChild(radioli3);
  ul.appendChild(document.createElement("br"));
  ul.appendChild(btnDel);

  contactSection.append(h3, ul);

  count_name++;
  console.log(count_name);

  buttonSubmit.style.display = "block";
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const dev_name = document.getElementById("dev-name");
  const list_language = document.getElementsByClassName("list-language");

  let technologies = [];

  list_language.forEach(function (row) {
    const name_language = row.querySelector(
      "#" + row.id + ' input[name="name-language"]'
    ).value;
    const tempo_experiencia = row.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    technologies.push({ name: name_language, exp: tempo_experiencia });
  });
  const newDev = { fullname: dev_name.value, technologies: technologies };
  developers.push(newDev);
  alert("Desenvolvedor cadastrado com sucesso!");

  dev_name.value = "";
  list_language.forEach(function (row) {
    row.remove();
  });

  console.log(developers);
});
