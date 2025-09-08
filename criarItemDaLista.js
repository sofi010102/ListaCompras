export const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
    if (inputItem.value.trim() === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    // Checkbox
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    containerItemDaLista.appendChild(inputCheckBox);

    // Texto do item
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckBox.addEventListener("change", function() {
        nomeItem.style.textDecoration = inputCheckBox.checked ? "line-through" : "none";
    });

    containerItemDaLista.appendChild(nomeItem);

    // Botão Editar
    const botaoEditar = document.createElement("button");
    botaoEditar.innerText = "✏️";
    botaoEditar.classList.add("botao-editar");
    botaoEditar.addEventListener("click", function() {
        const novoTexto = prompt("Editar item:", nomeItem.innerText);
        if (novoTexto !== null && novoTexto.trim() !== "") {
            nomeItem.innerText = novoTexto.trim();
        }
    });
    containerItemDaLista.appendChild(botaoEditar);

    // Botão Excluir
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "❌";
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.addEventListener("click", function() {
        itemDaLista.remove();
        import("./verificarListaVazia.js").then(({ default: verificarListaVazia }) => {
            const listaDeCompras = document.getElementById("lista-de-compras");
            verificarListaVazia(listaDeCompras);
        });
    });
    containerItemDaLista.appendChild(botaoExcluir);

    itemDaLista.appendChild(containerItemDaLista);
    return itemDaLista;
}
