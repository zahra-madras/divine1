// Fetch product data and generate product cards
fetch('/api/products')
  .then(response => response.json())
  .then(products => {
    const productGrid = document.querySelector('.grid');

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
        <div class="product-image">
          <img src="${product.imageUrl}" alt="${product.name}">
          <button class="btn btn-icon add-to-cart">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
        <div class="product-details">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">$${product.price}</p>
        </div>
      `;

      productGrid.appendChild(productCard);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });