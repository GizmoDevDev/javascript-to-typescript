const formatPrice = (price: number) => {
  return `${price.toFixed(2)} руб`
}

console.log(formatPrice(100))

console.log(formatPrice('100 руб'))