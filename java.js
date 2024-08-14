let form = document.getElementById("form");

function cadastrar() {
  let preco = document.getElementById("preco").value;
  let produto = document.getElementById("produto").value;

  if (preco === "" || produto === "") {
    alert("Você precisa preencher todos os campos");
    return;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let preco = document.getElementById("preco").value;
  let produto = document.getElementById("produto").value;
  let listaProdutos = document.getElementById("lista");

  listaProdutos.innerHTML =
    listaProdutos.innerHTML + ` <li> ${produto} - R$${preco}</li> `;
});

function limparLista() {
  document.getElementById("lista").innerHTML = "";
}

function cancelar() {
  document.getElementById("preco").value = "";
  document.getElementById("produto").value = "";
}
