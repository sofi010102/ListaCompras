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

    const botaoEditar = document.createElement("button");
    botaoEditar.innerHTML = "✏️";
    botaoEditar.classList.add("botao-editar");
    botaoEditar.addEventListener("click", () => {
        const novoTexto = prompt("Editar item:", nomeItem.innerText);
        if (novoTexto !== null && novoTexto.trim() !== "") {
            nomeItem.innerText = novoTexto;
        }
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML = "🗑️";
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.addEventListener("click", () => {
        itemDaLista.remove();
        import("./verificarListaVazia.js").then(({ default: verificarListaVazia }) => {
            verificarListaVazia(document.getElementById("lista-de-compras"));
        });
    });

    containerItemDaLista.appendChild(nomeItem);
    containerItemDaLista.appendChild(botaoEditar);
    containerItemDaLista.appendChild(botaoExcluir);
    itemDaLista.appendChild(containerItemDaLista);

    return itemDaLista;
}
