// Declaração da variavel de produtos global.

let produtos 

window.onload = function(){
    var storedUser = localStorage.getItem("usuario")
    var user = JSON.parse(storedUser)
   document.getElementById("user").textContent = user.nome;
   document.getElementById("perfil").textContent = user.nome;
   document.getElementById("idPerfil").textContent = user.id;
   console.log(id)
};

document.addEventListener("DOMContentLoaded", function(){
    // fetch dos produtos e armazenamento na variavel global.
    fetch("../Dados/loja.json").then((Response) => Response.json())
    .then((data) => {
        produtos = data;
        const produtosContainer  = document.getElementById("produtos-container")
        
        produtos.forEach((produto, index) => {
            const card = document.createElement("div")
            card.className = "card"
            card.style.width = "18rem"
            
            const imgs = document.createElement("img")
            imgs.src = produto.imgs
            imgs.className = "card-img-top"

            const cardBody = document.createElement("div")
            cardBody.className = "cardBody"

            const cardTitle =  document.createElement("div")
            cardTitle.className = "cardTitle"
            cardTitle.textContent = produto.descricao

            const cardText = document.createElement("p")
            cardText.className = "cardText"
            cardText.textContent = "Preço $" + produto.preco.toFixed(2)

            const btnAdicionarAoCarrinho = document.createElement("a")
            btnAdicionarAoCarrinho.href = '#'
            btnAdicionarAoCarrinho.className = "btn btn-primary btn-adicionar-ao-carrinho"
            btnAdicionarAoCarrinho.setAttribute("data-indice", index )
        });
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON", error))
})