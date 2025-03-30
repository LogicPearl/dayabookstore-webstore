// Basic JavaScript for functionality
document.addEventListener('DOMContentLoaded', function() {
    // Example of loading products
    const products = [
        { name: 'Product 1', price: 19.99 },
        { name: 'Product 2', price: 29.99 },
        { name: 'Product 3', price: 39.99 }
    ];

    const featuredProducts = document.querySelector('.featured-products');
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        featuredProducts.appendChild(productElement);
    });
});

function addToCart(productName) {
    alert(`Added ${productName} to cart!`);
    // You can implement actual cart functionality here
} 