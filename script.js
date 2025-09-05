// script.js
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list"); // Contêiner onde os produtos serão adicionados

  // Carregar o arquivo JSON com a lista de produtos
  fetch("products.json")
    .then(response => response.json())
    .then(products => {
      // Para cada produto no JSON, cria os elementos
      products.forEach(product => {
        // Cria o container do produto
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        // Adiciona o HTML dinâmico do produto com a imagem como link
        productItem.innerHTML = `
          <a href="${product.link}" >
            <img src="${product.image}" alt="${product.name}">
          </a>
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p class="price">${product.price}</p>
        `;

        // Adiciona o produto ao container principal
        productList.appendChild(productItem);
      });
    })
    .catch(error => {
      console.error("Erro ao carregar os produtos:", error);
      productList.innerHTML = "<p>Erro ao carregar a lista de produtos. Por favor, tente novamente mais tarde.</p>";
    });
});