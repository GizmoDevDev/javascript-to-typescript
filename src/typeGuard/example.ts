function print(num: string | number) {
  if (typeof num === "string"){
    console.log(num)
  } else {
    console.log(num.toFixed(2))
  }
}

function printArray(array?: number[]) {
  if (!array) {
    console.log('Передан undefined')
  } else {
    console.log(array)
  }
}