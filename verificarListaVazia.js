const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(lista) {
    const itens = lista.querySelectorAll("li");
    mensagemListaVazia.style.display = itens.length === 0 ? "block" : "none";
}

export default verificarListaVazia;
