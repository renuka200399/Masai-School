document.getElementById('addProductBtn').addEventListener('click', addProduct);
document.getElementById('sortPriceBtn').addEventListener('click', () => sortProducts('price'));
document.getElementById('sortRatingBtn').addEventListener('click', () => sortProducts('rating'));

let products = [];

function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const rating = parseFloat(document.getElementById('productRating').value);

    if (name && price >= 0 && rating >= 0 && rating <= 5) {
        const product = { name, price, rating };
        products.push(product);
        updateGraphs();
        clearInputs();
    } else {
        alert('Please enter valid product details');
    }
}

function clearInputs() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productRating').value = '';
}

function updateGraphs() {
    const priceBars = document.querySelector('#priceGraph .bars');
    const ratingBars = document.querySelector('#ratingGraph .bars');
    priceBars.innerHTML = '';
    ratingBars.innerHTML = '';

    products.forEach(product => {
        const priceBar = document.createElement('div');
        priceBar.classList.add('bar');
        priceBar.style.height = product.price * 10 + 'px'; // Scale height
        priceBar.innerHTML = `<div>${product.price}</div><div class="bar-label">${product.name}</div>`;
        priceBars.appendChild(priceBar);

        const ratingBar = document.createElement('div');
        ratingBar.classList.add('bar');
        ratingBar.style.height = product.rating * 50 + 'px'; // Scale height
        ratingBar.innerHTML = `<div>${product.rating}</div><div class="bar-label">${product.name}</div>`;
        ratingBars.appendChild(ratingBar);
    });
}

function sortProducts(criteria) {
    if (criteria === 'price') {
        products.sort((a, b) => a.price - b.price);
    } else if (criteria === 'rating') {
        products.sort((a, b) => a.rating - b.rating);
    }
    updateGraphs();
}
