const sequence = {
  _id: 1,
  get id() { return this._id++}
}

const products = {}

function saveProduct(product) {
  if(!product.id) product.id = sequence.id
  products[product.id] = product
  return product
}

function getProductById(productId) {
  return products[productId] || {}
}

function getProducts() {
  return Object.values(products)
}

function deleteProduct(productId) {
  const product = products[productId]
  delete products[productId]
  return product
}

module.exports = {
  saveProduct,
  getProductById,
  getProducts,
  deleteProduct
}