// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  let subtotal = product.querySelector('.subtotal span')

 subtotal.innerText = price * quantity

 return price * quantity

}

function calculateAll() {
  
  const products = document.querySelectorAll('.product')
  let total = 0
  products.forEach(product => {
    total += updateSubtotal(product)})

 total = document.querySelector("#total-value span").innerText

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
