// ITERATION 1

function updateSubtotal($product) {
  const $subtotalCalculation = parseFloat($product.querySelector('.price span').innerText) * $product.querySelector('.quantity input').valueAsNumber;
  return $product.querySelector('.subtotal span').innerText = $subtotalCalculation;
}

/* 
if we called document.querySelector('.price span') instead of $product.querySelector('.price span'), we'd only get the first instance
of '.price span', and not all of them

we use innerText and not innerHTML beacuse we only want that text; inside of innerHTML there could also be another tag, such as <em>

we use parseFloat because we need to transform that value, which is a string, into a number, so you can do the calculation;
we could also use Number()
*/


// ITERATIONS 2 AND 3

function calculateAll() {
  const $cart = document.querySelectorAll('#cart tr.product');
  let $total = 0;
  for (let $item of $cart) {
    $total += updateSubtotal($item);
  }
  document.getElementById('total-value').querySelector('span').innerText = $total;
}

const $calculateTrigger = document.getElementById('calculate');
$calculateTrigger.addEventListener('click', calculateAll);

/* if we used the for...in loop instead, it would return the key instead of its value */


// ITERATION 4

const $removeButtons = document.querySelectorAll('.btn.btn-remove');
for ($button of $removeButtons) {
  $button.addEventListener('click', addProductRemoveListener);
}

function addProductRemoveListener() {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); 
}

/* 

*/


// ITERATION 5

const $newProduct = document.getElementById('create');
$newProduct.addEventListener('click', createProduct);

function createProduct(event) {
  let newProductName = document.querySelector('.create-product td input[type="text"]').value;
  let newProductPrice = document.querySelector('.create-product td input[type="number"]').valueAsNumber;

  let $newRow = document.createElement(`tr`);
  $newRow.classList.add('product');
  
  $newRow.innerHTML = `
  <td class='name'>
    <span>${newProductName}</span>
  </td>
  <td class='price'>
    <span>${newProductPrice}</span>
  </td>
  <td class='quantity'>
    <input type="number" value="1" min="0" placeholder="Quantity" />
  </td>
  <td class='subtotal'>
  $<span>${newProductPrice}</span>
  </td>
  `;
  document.getElementById('cart').querySelector('tbody').appendChild($newRow);
}
