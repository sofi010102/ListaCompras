export const inputItem = document.getElementById("input-item");

let contador = 0;

export function criarItemDaLista() {
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    // Checkbox
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    containerItemDaLista.appendChild(inputCheckBox);

    inputCheckBox.addEventListener("change", () => {
        nomeItem.style.textDecoration = inputCheckBox.checked ? "line-through" : "none";
    });

    // Botão Editar
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "✏️";
    botaoEditar.classList.add("botao-editar");
    botaoEditar.addEventListener("click", () => {
        const novoValor = prompt("Edite o item:", nomeItem.innerText);
        if (novoValor && novoValor.trim() !== "") {
            nomeItem.innerText = novoValor;
        }
    });

    // Botão Excluir
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "🗑️";
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.addEventListener("click", () => {
        itemDaLista.remove();
    });

    containerItemDaLista.appendChild(nomeItem);
    containerItemDaLista.appendChild(botaoEditar);
    containerItemDaLista.appendChild(botaoExcluir);

    itemDaLista.appendChild(containerItemDaLista);

    return itemDaLista;
}
