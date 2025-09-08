export const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const container = document.createElement("div");
    container.classList.add("lista-item-container");

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    inputCheckBox.addEventListener("change", () => {
        nomeItem.style.textDecoration = inputCheckBox.checked ? "line-through" : "none";
    });

    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "✏️";
    botaoEditar.classList.add("botao-editar");
    botaoEditar.addEventListener("click", () => {
        const novoValor = prompt("Edite o item:", nomeItem.innerText);
        if (novoValor && novoValor.trim() !== "") nomeItem.innerText = novoValor;
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "🗑️";
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.addEventListener("click", () => itemDaLista.remove());

    container.appendChild(inputCheckBox);
    container.appendChild(nomeItem);
    container.appendChild(botaoEditar);
    container.appendChild(botaoExcluir);

    itemDaLista.appendChild(container);
    return itemDaLista;
}
