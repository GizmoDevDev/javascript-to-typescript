type NumberField = {
  type: 'number',
  data: number[],
}

type StringField = {
  type: 'string',
  data: string[],
}

function printData(fieldObject: NumberField | StringField) {
  if (fieldObject.type === 'number') {
    console.log(fieldObject.data.map((item) => item.toFixed(2)))
  } else {
    console.log(fieldObject.data)
  }
}