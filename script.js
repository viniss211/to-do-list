/*const line = document.getElementsByClassName('line');
const divList = document.getElementById('list')

let toDoList = []

const createItem = (value, id) => {
    return `<div class="list-item">
    <input class="note" type="text" value="${value}" disabled />
    <button class="remove-item" onclick="removeButton(${id})">x</button>
  </div>`
}

const addInTxt = (value) => {

}

const renderList = () => {
    divList.innerHTML = ''
    toDoList.map((value, index) => {
        divList.innerHTML += createItem(value, index)
    })
}

line[0].addEventListener('focus', () => {
    line[0].placeholder = ''
})

line[0].addEventListener('blur', () => {
    line[0].placeholder = 'ADD'
})

line[0].addEventListener('keyup', (e) => {
    if(e.key !== "Enter") return
    if(!e.target.value.trim()) {
        alert("Escreva algo para adicionar!")
        return
    }
    toDoList.push(e.target.value)
    renderList()
    addInTxt(e.target.value)
    line[0].value = ''
    
})

const removeButton = (id) => {
    toDoList = toDoList.filter((value, index) => {
        if(index != id) return value
    })
    renderList()
}
*/

const elementos = [];

const textInput = document.getElementById("line");
const elementList = document.getElementById("list");
const buttonRemove = document.getElementsByClassName("remove-item");

textInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita que a tecla Enter seja inserida no input

    const inputValue = textInput.value.trim(); //pega valor e retira espaço em branco
    if (inputValue !== "") {
      const newItem = document.createElement("div");

      newItem.innerHTML = `<div class="list-item">
      <input class="note" type="text" value="${inputValue}" disabled></div>
      <button class="button-item" id="edit-button" onclick="editNote(this)">E</button>
      <button class="button-item" onclick="removerElemento(this)">X</button>`;

      elementList.appendChild(newItem);

      textInput.value = ""; // Limpa o input após adicionar o elemento

      // Adiciona o texto ao vetor de elementos
      elementos.push(inputValue);

      // Exibe o vetor de elementos no console
      console.log(elementos);
    } else alert("Escreva algo para adicionar a lista!");
  }
});

function removerElemento(botao) {
  const itemRemovido = botao.parentElement;
  const inputValue = itemRemovido.querySelector("input").value;
  const indice = elementos.indexOf(inputValue);

  if (indice !== -1) {
    elementos.splice(indice, 1); // Remove o elemento do vetor
  }

  elementList.removeChild(itemRemovido); // Remove o elemento da lista
}

function editNote(botao) {
  const item = botao.parentElement; // Pega o elemento "div" que contém o input e os botões
  console.log(item);
  const inputField = item.querySelector(".note"); // Pega o elemento de input com a classe "note"
  console.log(inputField);
  const editButton = item.querySelector("#edit-button"); // Pega o botão "E"
  //Pegar valor anterior
  const index = Array.from(item.parentNode.children).indexOf(item); // Obtém o índice do item na lista
  
  
  if (inputField.disabled) {
    inputField.disabled = false; // Habilita a edição do input
    inputField.focus(); // Coloca o foco no input para facilitar a edição
    editButton.textContent = "S"; // Altera o texto do botão de "E" para "S" (Salvar)
  } else {
    const newValue = inputField.value; // Obtém o novo valor do input
    elementos[index] = newValue; // Atualiza o valor no vetor "bd" na mesma posição
    console.log(elementos); // Exibe o vetor atualizado no console
    inputField.disabled = true; // Desabilita a edição do input
    editButton.textContent = "E"; // Altera o texto do botão de "S" de volta para "E" (Editar)
  }
}

//<button class="remove-item" onclick="removeButton(${id})">x</button>
//const getMessage = () => "Hello World";
//document.getElementById('output').innerHTML = getMessage();
