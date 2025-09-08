import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
botaoAdicionar.style.cursor = "pointer";

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    if (itemDaLista) {
        listaDeCompras.appendChild(itemDaLista);
        verificarListaVazia(listaDeCompras);
        inputItem.value = "";
    }
});

// Verifica lista vazia ao carregar
verificarListaVazia(listaDeCompras);
