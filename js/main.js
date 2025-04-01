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

// Platform detection script
document.addEventListener('DOMContentLoaded', function() {
    const userAgent = navigator.userAgent.toLowerCase();
    const body = document.body;
    
    // Detect platform
    if (/iphone|ipad|ipod/.test(userAgent)) {
        body.classList.add('ios-device');
    } else if (/android/.test(userAgent)) {
        body.classList.add('android-device');
    } else if (/windows/.test(userAgent)) {
        body.classList.add('windows-device');
    } else if (/macintosh/.test(userAgent)) {
        body.classList.add('mac-device');
    }

    // Detect if running in standalone app mode
    if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) {
        body.classList.add('app-mode');
    }

    // Detect if running in WebView
    if (window.webkit && window.webkit.messageHandlers) {
        body.classList.add('ios-webview');
    } else if (window.Android) {
        body.classList.add('android-webview');
    }

    // Get iOS version
    function getiOSVersion() {
        const match = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return match ? parseInt(match[1], 10) : null;
    }

    // Get Android version
    function getAndroidVersion() {
        const match = navigator.userAgent.match(/Android\s([0-9.]*)/);
        return match ? parseInt(match[1], 10) : null;
    }

    // Add version-specific classes
    const iOSVersion = getiOSVersion();
    const androidVersion = getAndroidVersion();
    
    if (iOSVersion) {
        body.classList.add(`ios-${iOSVersion}`);
    }
    if (androidVersion) {
        body.classList.add(`android-${androidVersion}`);
    }
}); 