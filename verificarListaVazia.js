const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    mensagemListaVazia.style.display = itensDaLista.length === 0 ? "block" : "none";
}

export default verificarListaVazia;
