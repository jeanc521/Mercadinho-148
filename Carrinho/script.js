$(document).ready(function(){
    // recupear o carrinho do lpocalstorage.

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

//elemento onde a lista sera exibida.
const listElement = $("#lista");
//elemento para o total.
const totalElemt = $("#total");

// Função para eibir o carrinho.
function exibirCarrinho(){
    //Limpa o conteudo da lista.
    listElement.empty();

    //Variavel para acumular o preço total.
    let totalPreco = 0;

    //Itera sobre os item do carrimho.
    $.each(carrinho, function(index, item){
        //Criar um elemento de lista para cada item.
        const listItem = $("<li>").text(
            `${item.descricao} - Preço: $${item.preco}`

        );
        //cria um botao de remoção 
        const removeButton = $("<button>")
        .text("❌")
        .css("margin-left", "10px")
        .click(function(){
            removerItemDoCarrinho(index)
        });
        listItem.append(removeButton)
        listElement.append(listItem)
        totalPreco += item.preco
        })
        totaltElement.text(`Total: $${totalPreco}`)
    }
    function removerItemDoCarrinho(index){
        carrinho.plice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        exibirCarrinho();
    }


    exibirCarrinho();
})
function gerarDocumentoWord(){
    const listaElement = document.getElementById("lista")
    const totalElement = document.getElementById("total")

    //Clona  alista para eviat a modificação  dereta da lista.
    const listClone = listaElement.cloneNode(true)
    $(listClone).find("button").remove()

    const listaHtml = listClone.innerHTML
    const totalHtml = listClone.innerHTML

    const conteudohtml = `
    <html>
        <head>
            <meta charset="UTF=8" />
            </head>
            <body>
            <h1>Pedido Confirmado</h1>
            ${listaHtml}
            <br><br>
            ${totalHtml},


            </body>
    </html>
    `;

    const blob = new Blob([conteudohtml], {type: "application/msword"});
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "carrinho.doc"
    link.click();

    document.getElementById("pedido").style.display = "block"
}
function successClose(){
    document.getElementById("pedido").style.display = "none"
}