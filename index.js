import { criarItemDaLista } from "./criarItemDaLista.js";
import verificarListaVazia from "./verificarListaVazia.js";

const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    if (itemDaLista) {
        listaDeCompras.appendChild(itemDaLista);
        verificarListaVazia(listaDeCompras);
        inputItem.value = "";
    }
});

verificarListaVazia(listaDeCompras);
